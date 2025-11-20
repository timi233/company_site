'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme,
} from 'next-themes'

function TimeBasedThemeSync() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // 检测是否有手动设置过的主题偏好
  const hasManualPreference = React.useRef(false)

  React.useEffect(() => {
    setMounted(true)

    // 标记已加载，启用过渡
    requestAnimationFrame(() => {
      document.body.classList.add('hydrated')
    })

    // 检查 localStorage 是否有手动设置的主题
    const manualTheme = localStorage.getItem('theme-manual-override')
    if (manualTheme) {
      hasManualPreference.current = true
    }
  }, [])

  React.useEffect(() => {
    if (!mounted) return

    const getThemeByTime = () => {
      const hour = new Date().getHours()
      // 5:00-19:00 使用浅色主题，其他时间使用深色主题
      return (hour >= 5 && hour < 19) ? 'light' : 'dark'
    }

    const updateTheme = () => {
      const manualTheme = localStorage.getItem('theme-manual-override')
      if (manualTheme) {
        hasManualPreference.current = true
      }

      // 如果用户手动设置过主题，则不自动切换
      if (hasManualPreference.current) return

      const timeBasedTheme = getThemeByTime()
      if (theme !== timeBasedTheme) {
        setTheme(timeBasedTheme)
      }
    }

    // 初始设置
    updateTheme()

    // 每分钟检查一次（可以调整为每小时：60 * 60 * 1000）
    const interval = setInterval(updateTheme, 60 * 1000)

    return () => clearInterval(interval)
  }, [mounted, theme, setTheme])

  return null
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TimeBasedThemeSync />
      {children}
    </NextThemesProvider>
  )
}
