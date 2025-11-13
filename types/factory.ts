export interface MonthlyData {
  month: string;
  value: number;
}

export interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  address: string;
}

export interface Contact {
  manager: string;
  phone: string;
  email: string;
}

export interface Factory {
  id: number;
  name: string;
  location: Location;
  status: "operational" | "maintenance";
  established: string;
  employees: number;
  specialization: string[];
  production_capacity_monthly: number;
  production_level_2024: MonthlyData[];
  inventory_level_2024: MonthlyData[];
  contact: Contact;
}

export interface CompanyInfo {
  name: string;
  founded: string;
  headquarters: string;
  industry: string;
  description: string;
}

export interface FactoryFilters {
  available_countries: string[];
  available_statuses: string[];
  applied: {
    country: string | null;
    status: string | null;
    factoryId: number | null;
  };
}

export interface FactoryData {
  message: string;
  company_info: CompanyInfo;
  factory_data: Factory[];
  filters: FactoryFilters;
}
