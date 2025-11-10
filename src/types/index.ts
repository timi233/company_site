export interface Product {
  id: string;
  name: string;
  vendor: string;
  category: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface Solution {
  id: string;
  title: string;
  industry: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  products: string[];
  benefits?: string[];
  targetCustomers?: string;
  image?: string;
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
  logo?: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  website?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  scope: string[];
  icon?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  englishAbbr: string;
  slogan: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  contact: {
    email: string;
    phone: string;
    jinanOffice: string;
    qingdaoOffice: string;
  };
}
