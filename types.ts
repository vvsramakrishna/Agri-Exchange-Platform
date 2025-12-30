
export type UserRole = 'buyer' | 'seller' | null;

export enum ResidueType {
  RICE_STRAW = 'Rice Straw',
  WHEAT_STRAW = 'Wheat Straw',
  MUSTARD_HUSK = 'Mustard Husk',
  COTTON_STALKS = 'Cotton Stalks',
  CANE_TRASH = 'Sugarcane Trash',
  SOYBEAN_TRASH = 'Soybean Trash',
}

export enum GCVRange {
  VERY_LOW = '3000 - 3500 kcal/kg',
  LOW = '3500 - 4000 kcal/kg',
  MEDIUM = '4000 - 4500 kcal/kg',
  HIGH = 'Above 4500 kcal/kg',
  VERY_HIGH = 'Don\'t Know'
}

export enum SellerType {
  INDIVIDUAL = 'Individual Farmer',
  ORGANIZATION = 'Organization (FPO/Trader)',
}

export interface BuyerFormData {
  residueType: string;
  location: string;
  quantity: number;
  expectedGCV: string;
  peakMonths: string[];
}

export interface SellerFormData {
  sellerType: SellerType | null;
  cropTypes: string[];
  wasteType: string;
  procurementCapacity: number;
  location: string;
}

export type ViewState = 'landing' | 'role_selection' | 'buyer_form' | 'seller_type' | 'seller_form' | 'dashboard' | 'marketplace' | 'how_it_works';
