import { calculatePointsForPurchase, denominations, gradeScale } from './photograde';

export type Role = 'customer' | 'admin';
export type CoinStatus = 'in_collection' | 'for_sale' | 'pending_review' | 'sold';

export type CustomerProfile = {
  id: string;
  username: string;
  displayName: string;
  role: Role;
  points: number;
  lifetimeSpend: number;
  registryScore: number;
};

export type RegistryCoin = {
  id: string;
  ownerId: string;
  denominationId: string;
  series: string;
  year: string;
  mintMark: string;
  estimatedGrade: string;
  certifiedGrade?: string;
  certNumber?: string;
  notes: string;
  pointsValue: number;
  status: CoinStatus;
  askingPrice?: number;
  imagePreview?: string;
};

export type RegistrySet = {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  targetCoins: number;
  ownedCoins: number;
  completionPercent: number;
  isPublic: boolean;
};

export type SaleLedgerEntry = {
  id: string;
  customerId: string;
  label: string;
  amount: number;
  pointsEarned: number;
  createdAt: string;
};

export const demoCustomer: CustomerProfile = {
  id: 'cust-demo',
  username: 'oclcollector',
  displayName: 'OCL Collector',
  role: 'customer',
  points: 940,
  lifetimeSpend: 470,
  registryScore: 1285,
};

export const demoAdmin: CustomerProfile = {
  id: 'admin-demo',
  username: 'admin',
  displayName: 'Outta City Limits Admin',
  role: 'admin',
  points: 0,
  lifetimeSpend: 0,
  registryScore: 0,
};

export const demoCoins: RegistryCoin[] = [
  { id: 'coin-1', ownerId: 'cust-demo', denominationId: 'silver-dollar', series: 'Morgan Dollar', year: '1881', mintMark: 'S', estimatedGrade: 'MS63', certifiedGrade: 'MS63', certNumber: 'NGC DEMO', notes: 'Strong luster, clean cheek, good breast feather detail.', pointsValue: 180, status: 'in_collection' },
  { id: 'coin-2', ownerId: 'cust-demo', denominationId: 'silver-dollar', series: 'Peace Dollar', year: '1921', mintMark: '', estimatedGrade: 'VF30', notes: 'High relief wear across hair and eagle wing, still attractive.', pointsValue: 95, status: 'for_sale', askingPrice: 325 },
  { id: 'coin-3', ownerId: 'cust-demo', denominationId: 'small-cent', series: 'Lincoln Wheat Cent', year: '1909', mintMark: 'VDB', estimatedGrade: 'XF40', notes: 'Wheat lines mostly visible. Good registry filler.', pointsValue: 60, status: 'pending_review' },
];

export const demoSets: RegistrySet[] = [
  { id: 'set-1', ownerId: 'cust-demo', name: 'Morgan Dollar Date Set', description: 'One Morgan dollar per date with priority on eye appeal.', targetCoins: 28, ownedCoins: 9, completionPercent: 32, isPublic: true },
  { id: 'set-2', ownerId: 'cust-demo', name: 'Peace Dollar Set', description: 'Circulated-to-MS Peace dollar registry run.', targetCoins: 24, ownedCoins: 6, completionPercent: 25, isPublic: true },
  { id: 'set-3', ownerId: 'cust-demo', name: 'Lincoln Wheat Keys', description: 'Key and semi-key Lincoln Wheat cents.', targetCoins: 12, ownedCoins: 3, completionPercent: 25, isPublic: false },
];

export const demoSales: SaleLedgerEntry[] = [
  { id: 'sale-1', customerId: 'cust-demo', label: 'Whatnot Morgan purchase', amount: 125, pointsEarned: calculatePointsForPurchase(125), createdAt: 'Today' },
  { id: 'sale-2', customerId: 'cust-demo', label: 'OCL shop bullion order', amount: 215, pointsEarned: calculatePointsForPurchase(215), createdAt: 'This week' },
  { id: 'sale-3', customerId: 'cust-demo', label: 'Vintage toy bundle', amount: 130, pointsEarned: calculatePointsForPurchase(130), createdAt: 'This month' },
];

export const adminChecklist = [
  'Approve customer registry coins before public sale',
  'Review PhotoGrade confidence before labeling as shop opinion',
  'Apply 2 points per $1 sale automatically or manually adjust account',
  'Promote strong registry sets to OCL marketplace features',
  'Keep certification numbers and photos tied to every item record',
];

export const acquisitionFlow = [
  'Customer registers with username and password',
  'Customer uploads or logs a coin into the vault',
  'PhotoGrade compares denomination, date, grade band and visual notes',
  'Coin is saved into a registry set with value and point impact',
  'Customer can request OCL review to sell the coin through the shop',
  'Admin approves, prices and publishes marketplace listing',
];

export function getDenominationName(id: string) {
  return denominations.find((item) => item.id === id)?.name ?? id;
}

export function getGradeLabel(code: string) {
  return gradeScale.find((item) => item.code === code)?.label ?? code;
}

export function estimateRegistryScore(coins: RegistryCoin[]) {
  return coins.reduce((total, coin) => total + coin.pointsValue, 0);
}
