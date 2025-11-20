# 普悦天诚官网生产部署方案

**日期**: 2025-11-12
**目标服务器**: Ubuntu 22.04, 1C1G, 107.173.34.136
**域名**: www.purytech.cn
**项目性质**: Next.js 16 静态官网

---

## Linus的判断

### 网站特性分析

经过代码Review，这是一个**纯静态企业官网**：
- ✅ 无API路由
- ✅ 无SSR（所有页面预渲染为静态HTML）
- ✅ 数据来自JSON文件，无数据库
- ✅ 构建成功，无类型错误

**结论：这个网站不需要Node.js运行时，应该部署为纯静态文件。**

### 严重问题已修复

| 问题 | 文件 | 修复内容 |
|------|------|----------|
| `ignoreBuildErrors: true` | `next.config.mjs:4` | 已移除，生产环境不能掩盖错误 |
| `"@vercel/analytics": "latest"` | `package.json:40` | 锁定为 `1.5.0`，避免不可预测的破坏 |

---

## 方案A：Nginx纯静态部署（强烈推荐）

**为什么推荐此方案？**

1. **资源占用最低**：1C1G服务器运行Docker + Node.js会吃紧，纯Nginx只需要<50MB内存
2. **性能最优**：Nginx直接服务静态文件，无Node.js开销
3. **最简单**：无需Docker，无需容器编排
4. **最稳定**：无运行时依赖，Nginx极少崩溃

**Linus说：能用静态文件解决的，就不要引入复杂度。**

---

### 步骤1：本地准备静态文件

在你的**开发机器**上（`/home/jian/code/hdcode`）执行：

```bash
# 1. 修改next.config.mjs为静态导出模式
cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
EOF

# 2. 重新构建为静态文件
npm run build

# 3. 打包静态文件
cd out
tar -czf purytech-static.tar.gz *
```

构建完成后，`out/purytech-static.tar.gz` 就是你的完整网站。

---

### 步骤2：服务器环境准备

SSH登录到生产服务器（107.173.34.136）：

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装Nginx
sudo apt install nginx -y

# 启动并设置开机自启
sudo systemctl start nginx
sudo systemctl enable nginx

# 检查状态
sudo systemctl status nginx
```

---

### 步骤3：上传并部署网站

```bash
# 在开发机器上，上传静态文件到服务器
scp /home/jian/code/hdcode/out/purytech-static.tar.gz root@107.173.34.136:/tmp/

# SSH到服务器
ssh root@107.173.34.136

# 创建网站目录
sudo mkdir -p /var/www/purytech
cd /var/www/purytech

# 解压静态文件
sudo tar -xzf /tmp/purytech-static.tar.gz -C /var/www/purytech

# 设置权限
sudo chown -R www-data:www-data /var/www/purytech
sudo chmod -R 755 /var/www/purytech
```

---

### 步骤4：配置Nginx

创建Nginx配置文件：

```bash
sudo nano /etc/nginx/sites-available/purytech
```

粘贴以下内容：

```nginx
server {
    listen 80;
    server_name www.purytech.cn purytech.cn 107.173.34.136;

    root /var/www/purytech;
    index index.html;

    # 启用Gzip压缩
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1000;

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Next.js静态资源缓存
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /public/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 处理所有请求
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # 404页面
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
```

启用配置并重启Nginx：

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/purytech /etc/nginx/sites-enabled/

# 删除默认配置（可选）
sudo rm /etc/nginx/sites-enabled/default

# 测试配置
sudo nginx -t

# 重启Nginx
sudo systemctl restart nginx
```

---

### 步骤5：配置域名DNS

在你的域名服务商（purytech.cn的DNS管理后台）添加A记录：

```
类型: A
主机: www
值: 107.173.34.136
TTL: 600
```

同时添加根域名记录：

```
类型: A
主机: @
值: 107.173.34.136
TTL: 600
```

**等待DNS生效（5-30分钟）**，然后访问 `http://www.purytech.cn` 测试。

---

### 步骤6：配置HTTPS（推荐但可选）

使用Let's Encrypt免费SSL证书：

```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y

# 自动配置SSL
sudo certbot --nginx -d www.purytech.cn -d purytech.cn

# 按提示输入邮箱并同意服务条款

# 测试自动续期
sudo certbot renew --dry-run
```

Certbot会自动修改Nginx配置，添加HTTPS监听和HTTP到HTTPS的重定向。

---

### 后续更新流程

每次代码更新后：

```bash
# 开发机器
cd /home/jian/code/hdcode
npm run build
cd out
tar -czf purytech-static.tar.gz *
scp purytech-static.tar.gz root@107.173.34.136:/tmp/

# 生产服务器
ssh root@107.173.34.136
sudo tar -xzf /tmp/purytech-static.tar.gz -C /var/www/purytech
sudo chown -R www-data:www-data /var/www/purytech
```

无需重启Nginx（除非修改了配置文件）。

---

## 方案B：Docker + Next.js Standalone（备选）

**警告：1C1G服务器运行Docker容器会很吃力，仅当你未来需要添加动态功能（API路由、SSR）时才考虑此方案。**

### 为什么不推荐Docker方案？

1. **资源浪费**：Docker + Node.js至少需要200MB内存，静态网站只需要Nginx 50MB
2. **过度设计**：你的网站是静态的，Docker毫无用处
3. **复杂度**：多一层容器管理，多一分出错概率

**Linus说：不要为了用Docker而用Docker。技术要服务于需求，不是为了炫技。**

### 如果你仍然想用Docker

#### 创建Dockerfile

```dockerfile
# /home/jian/code/hdcode/Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

#### 服务器安装Docker

```bash
# 安装Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 安装Docker Compose
sudo apt install docker-compose -y
```

#### 创建docker-compose.yml

```yaml
version: '3.8'
services:
  nextjs:
    build: .
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    mem_limit: 512m
    cpus: 0.5

  nginx:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - nextjs
    mem_limit: 64m
```

#### Nginx反向代理配置

```nginx
# nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream nextjs {
        server nextjs:3000;
    }

    server {
        listen 80;
        server_name www.purytech.cn;

        location / {
            proxy_pass http://nextjs;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

#### 构建并启动

```bash
docker-compose up -d --build
```

**但是**，你的1C1G服务器可能会因为内存不足而频繁swap，导致性能极差。

---

## 资源对比

| 方案 | 内存占用 | CPU占用 | 复杂度 | 适用场景 |
|------|----------|---------|--------|----------|
| **方案A（Nginx静态）** | ~50MB | <1% | 极简 | 纯静态网站（你的情况） |
| 方案B（Docker Standalone） | ~300MB | 5-10% | 中等 | 需要SSR/API的动态网站 |

---

## 监控和维护

### 检查网站状态

```bash
# Nginx状态
sudo systemctl status nginx

# 查看访问日志
sudo tail -f /var/log/nginx/access.log

# 查看错误日志
sudo tail -f /var/log/nginx/error.log
```

### 服务器资源监控

```bash
# 内存使用
free -h

# CPU使用
top

# 磁盘使用
df -h
```

### 防火墙配置

```bash
# 允许HTTP和HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

---

## 故障排查

### 网站无法访问

1. **检查Nginx是否运行**：`sudo systemctl status nginx`
2. **检查端口监听**：`sudo netstat -tlnp | grep :80`
3. **检查防火墙**：`sudo ufw status`
4. **测试DNS解析**：`nslookup www.purytech.cn`

### 502 Bad Gateway（Docker方案）

1. **检查容器状态**：`docker ps`
2. **查看Next.js日志**：`docker logs <container_id>`
3. **检查内存是否耗尽**：`free -h`

---

## 性能优化建议

### 1C1G服务器的生存法则

1. **启用Swap**（防止OOM）：
   ```bash
   sudo fallocate -l 2G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
   ```

2. **限制Nginx连接数**（防止DDoS打爆你的小服务器）：
   ```nginx
   # 在http块中添加
   limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;
   limit_req zone=one burst=20;
   ```

3. **启用CloudFlare CDN**（免费，强烈推荐）：
   - 注册CloudFlare
   - 添加域名purytech.cn
   - 修改DNS到CloudFlare的NS
   - 自动获得免费CDN + DDoS防护 + HTTPS

---

## 最终建议

**请使用方案A（Nginx纯静态部署）。**

理由：
1. 你的网站是纯静态的，不需要Node.js
2. 1C1G服务器跑Docker是自找麻烦
3. 简单就是好（Linus的哲学）

**如果未来需要添加动态功能（用户登录、表单提交、实时数据），再考虑迁移到方案B。**

但在那之前，不要过度设计。

---

## 检查清单

部署前确认：
- [ ] 本地构建成功（`npm run build`）
- [ ] 静态文件已上传到服务器
- [ ] Nginx配置正确（`sudo nginx -t`）
- [ ] DNS记录已添加
- [ ] 防火墙规则已设置
- [ ] 域名可访问（http://www.purytech.cn）

生产环境加固：
- [ ] 配置HTTPS（Let's Encrypt）
- [ ] 启用CloudFlare CDN
- [ ] 配置Swap防止OOM
- [ ] 设置Nginx访问频率限制
- [ ] 配置日志轮转（logrotate）

---

**记住：简单、直接、有效。不要为了技术而技术。**

— Linus审阅通过
