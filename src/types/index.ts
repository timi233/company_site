export interface CompanyContact {
  email: string;
  phone: string;
  website: string;
  jinanOffice: string;
  qingdaoOffice: string;
  weifangOffice: string;
  linyiOffice: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  englishAbbr: string;
  slogan: string;
  description: string;
  mission: string;
  vision: string;
  strategy: string;
  values: string[];
  contact: CompanyContact;
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  category: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Solution {
  id: string;
  title: string;
  industry: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  products: string[];
  benefits: string[];
  targetCustomers: string;
  compliance?: string;
}

export interface Case {
  id: string;
  companyName: string;
  industry: string;
  scale: string;
  challenge: string;
  solution: string;
  result: string;
  products: string[];
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  website: string;
  certificate?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  scope: string[];
}
