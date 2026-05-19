export type GradeBand = 'Circulated' | 'About Uncirculated' | 'Mint State' | 'Proof';

export type PhotoGrade = {
  code: string;
  label: string;
  numeric: number;
  band: GradeBand;
};

export type Denomination = {
  id: string;
  name: string;
  type: 'copper' | 'nickel' | 'silver' | 'clad' | 'gold' | 'bullion' | 'commemorative';
  years: string;
  notes: string;
};

export const POINTS_PER_DOLLAR = 2;

export function calculatePointsForPurchase(amountSpent: number): number {
  return Math.floor(Math.max(amountSpent, 0) * POINTS_PER_DOLLAR);
}

export const gradeScale: PhotoGrade[] = [
  { code: 'G1', label: 'Poor / Good 1', numeric: 1, band: 'Circulated' },
  { code: 'FR2', label: 'Fair 2', numeric: 2, band: 'Circulated' },
  { code: 'AG3', label: 'About Good 3', numeric: 3, band: 'Circulated' },
  { code: 'G4', label: 'Good 4', numeric: 4, band: 'Circulated' },
  { code: 'G6', label: 'Good 6', numeric: 6, band: 'Circulated' },
  { code: 'VG8', label: 'Very Good 8', numeric: 8, band: 'Circulated' },
  { code: 'VG10', label: 'Very Good 10', numeric: 10, band: 'Circulated' },
  { code: 'F12', label: 'Fine 12', numeric: 12, band: 'Circulated' },
  { code: 'F15', label: 'Fine 15', numeric: 15, band: 'Circulated' },
  { code: 'VF20', label: 'Very Fine 20', numeric: 20, band: 'Circulated' },
  { code: 'VF25', label: 'Very Fine 25', numeric: 25, band: 'Circulated' },
  { code: 'VF30', label: 'Very Fine 30', numeric: 30, band: 'Circulated' },
  { code: 'VF35', label: 'Very Fine 35', numeric: 35, band: 'Circulated' },
  { code: 'XF40', label: 'Extremely Fine 40', numeric: 40, band: 'Circulated' },
  { code: 'XF45', label: 'Extremely Fine 45', numeric: 45, band: 'Circulated' },
  { code: 'AU50', label: 'About Uncirculated 50', numeric: 50, band: 'About Uncirculated' },
  { code: 'AU53', label: 'About Uncirculated 53', numeric: 53, band: 'About Uncirculated' },
  { code: 'AU55', label: 'About Uncirculated 55', numeric: 55, band: 'About Uncirculated' },
  { code: 'AU58', label: 'About Uncirculated 58', numeric: 58, band: 'About Uncirculated' },
  { code: 'MS60', label: 'Mint State 60', numeric: 60, band: 'Mint State' },
  { code: 'MS61', label: 'Mint State 61', numeric: 61, band: 'Mint State' },
  { code: 'MS62', label: 'Mint State 62', numeric: 62, band: 'Mint State' },
  { code: 'MS63', label: 'Mint State 63', numeric: 63, band: 'Mint State' },
  { code: 'MS64', label: 'Mint State 64', numeric: 64, band: 'Mint State' },
  { code: 'MS65', label: 'Mint State 65', numeric: 65, band: 'Mint State' },
  { code: 'MS66', label: 'Mint State 66', numeric: 66, band: 'Mint State' },
  { code: 'MS67', label: 'Mint State 67', numeric: 67, band: 'Mint State' },
  { code: 'MS68', label: 'Mint State 68', numeric: 68, band: 'Mint State' },
  { code: 'MS69', label: 'Mint State 69', numeric: 69, band: 'Mint State' },
  { code: 'MS70', label: 'Mint State 70', numeric: 70, band: 'Mint State' },
  { code: 'PR60', label: 'Proof 60', numeric: 60, band: 'Proof' },
  { code: 'PR61', label: 'Proof 61', numeric: 61, band: 'Proof' },
  { code: 'PR62', label: 'Proof 62', numeric: 62, band: 'Proof' },
  { code: 'PR63', label: 'Proof 63', numeric: 63, band: 'Proof' },
  { code: 'PR64', label: 'Proof 64', numeric: 64, band: 'Proof' },
  { code: 'PR65', label: 'Proof 65', numeric: 65, band: 'Proof' },
  { code: 'PR66', label: 'Proof 66', numeric: 66, band: 'Proof' },
  { code: 'PR67', label: 'Proof 67', numeric: 67, band: 'Proof' },
  { code: 'PR68', label: 'Proof 68', numeric: 68, band: 'Proof' },
  { code: 'PR69', label: 'Proof 69', numeric: 69, band: 'Proof' },
  { code: 'PR70', label: 'Proof 70', numeric: 70, band: 'Proof' },
];

export const denominations: Denomination[] = [
  { id: 'half-cent', name: 'Half Cent', type: 'copper', years: '1800-1857', notes: 'Draped Bust, Classic Head, Braided Hair.' },
  { id: 'large-cent', name: 'Large Cent', type: 'copper', years: '1800-1857', notes: 'Draped Bust through Braided Hair copper cents.' },
  { id: 'small-cent', name: 'Small Cent', type: 'copper', years: '1856-current', notes: 'Flying Eagle, Indian Head, Lincoln wheat, memorial, shield.' },
  { id: 'two-cent', name: 'Two Cent', type: 'copper', years: '1864-1873', notes: 'Civil War era two-cent pieces.' },
  { id: 'three-cent-silver', name: 'Three Cent Silver', type: 'silver', years: '1851-1873', notes: 'Tiny silver three-cent type coin.' },
  { id: 'three-cent-nickel', name: 'Three Cent Nickel', type: 'nickel', years: '1865-1889', notes: 'Nickel composition three-cent pieces.' },
  { id: 'half-dime', name: 'Half Dime', type: 'silver', years: '1800-1873', notes: 'Early silver five-cent denomination.' },
  { id: 'nickel', name: 'Nickel', type: 'nickel', years: '1866-current', notes: 'Shield, Liberty, Buffalo, Jefferson.' },
  { id: 'dime', name: 'Dime', type: 'silver', years: '1800-current', notes: 'Draped Bust through Roosevelt.' },
  { id: 'twenty-cent', name: 'Twenty Cent', type: 'silver', years: '1875-1878', notes: 'Short-lived twenty-cent silver type.' },
  { id: 'quarter', name: 'Quarter Dollar', type: 'silver', years: '1804-current', notes: 'Early quarters through Washington and modern issues.' },
  { id: 'half-dollar', name: 'Half Dollar', type: 'silver', years: '1801-current', notes: 'Flowing Hair through Kennedy.' },
  { id: 'silver-dollar', name: 'Silver Dollar', type: 'silver', years: '1800-1935', notes: 'Draped Bust, Seated, Trade, Morgan, Peace.' },
  { id: 'modern-dollar', name: 'Modern Dollar', type: 'clad', years: '1971-current', notes: 'Eisenhower, Susan B. Anthony, Sacagawea, Presidential, Innovation.' },
  { id: 'gold-dollar', name: 'Gold Dollar', type: 'gold', years: '1849-1889', notes: 'Type I, II, III gold dollars.' },
  { id: 'quarter-eagle', name: 'Quarter Eagle $2.50', type: 'gold', years: '1802-1929', notes: 'Classic U.S. $2.50 gold denomination.' },
  { id: 'three-dollar-gold', name: 'Three Dollar Gold', type: 'gold', years: '1854-1889', notes: 'Rare three-dollar gold denomination.' },
  { id: 'half-eagle', name: 'Half Eagle $5', type: 'gold', years: '1800-1929', notes: 'Early gold through Indian Head.' },
  { id: 'eagle', name: 'Eagle $10', type: 'gold', years: '1800-1933', notes: 'Liberty and Indian Head gold eagles.' },
  { id: 'double-eagle', name: 'Double Eagle $20', type: 'gold', years: '1849-1933', notes: 'Liberty and Saint-Gaudens double eagles.' },
  { id: 'commemorative', name: 'Commemoratives', type: 'commemorative', years: '1892-current', notes: 'Classic and modern commemorative coinage.' },
  { id: 'bullion', name: 'Bullion', type: 'bullion', years: '1986-current', notes: 'American Silver Eagle, Gold Eagle, Platinum, Palladium and related bullion.' },
];

export const photoGradeCoverageCount = denominations.length * gradeScale.length;

export function buildReferenceImagePath(denominationId: string, gradeCode: string): string {
  return `/photograde/${denominationId}/${gradeCode.toLowerCase()}.jpg`;
}

export function getGradeByCode(code: string) {
  return gradeScale.find((grade) => grade.code.toLowerCase() === code.toLowerCase());
}
