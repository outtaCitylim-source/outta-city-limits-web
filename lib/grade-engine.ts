import { getGradeByCode, gradeScale } from './photograde';

export type CoinPhotoSignals = {
  luster: number;
  strike: number;
  surface: number;
  eyeAppeal: number;
  wear: number;
  marks: number;
};

export type GradeSuggestion = {
  grade: string;
  label: string;
  confidence: number;
  reason: string;
};

export function normalizeSignal(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function estimateNumericGrade(signals: CoinPhotoSignals): number {
  const luster = normalizeSignal(signals.luster);
  const strike = normalizeSignal(signals.strike);
  const surface = normalizeSignal(signals.surface);
  const eyeAppeal = normalizeSignal(signals.eyeAppeal);
  const wear = normalizeSignal(signals.wear);
  const marks = normalizeSignal(signals.marks);

  const mintStateScore = luster * 0.3 + surface * 0.25 + eyeAppeal * 0.2 + strike * 0.15 + (100 - marks) * 0.1;
  const circulatedScore = 70 - wear * 0.55 + luster * 0.12 + surface * 0.12 + eyeAppeal * 0.11 + strike * 0.1;
  const raw = wear < 12 && luster > 55 ? Math.max(60, mintStateScore * 0.1 + 58) : circulatedScore;
  return Math.max(1, Math.min(70, Math.round(raw)));
}

export function closestGradeCode(numericGrade: number, proof = false) {
  const candidates = gradeScale.filter((grade) => proof ? grade.code.startsWith('PR') : !grade.code.startsWith('PR'));
  return candidates.reduce((closest, grade) => {
    return Math.abs(grade.numeric - numericGrade) < Math.abs(closest.numeric - numericGrade) ? grade : closest;
  }, candidates[0]);
}

export function suggestGrades(signals: CoinPhotoSignals, proof = false): GradeSuggestion[] {
  const numeric = estimateNumericGrade(signals);
  const primary = closestGradeCode(numeric, proof);
  const lower = closestGradeCode(Math.max(1, numeric - 5), proof);
  const upper = closestGradeCode(Math.min(70, numeric + 4), proof);
  const unique = [primary, lower, upper].filter((grade, index, list) => list.findIndex((item) => item.code === grade.code) === index);

  return unique.map((grade, index) => ({
    grade: grade.code,
    label: getGradeByCode(grade.code)?.label ?? grade.label,
    confidence: Math.max(42, 86 - index * 13 - Math.abs(grade.numeric - numeric) * 2),
    reason: buildGradeReason(signals, grade.code),
  }));
}

export function buildGradeReason(signals: CoinPhotoSignals, gradeCode: string) {
  const luster = normalizeSignal(signals.luster);
  const wear = normalizeSignal(signals.wear);
  const surface = normalizeSignal(signals.surface);
  if (gradeCode.startsWith('MS') || gradeCode.startsWith('PR')) {
    return `Strong uncirculated candidate: luster ${luster}/100, wear ${wear}/100, surface ${surface}/100.`;
  }
  if (wear > 60) return `Heavy circulation pattern: wear ${wear}/100 with limited high-point detail.`;
  if (wear > 30) return `Moderate circulation pattern: wear ${wear}/100 with remaining major design detail.`;
  return `Light circulation pattern: low wear with partial luster and above-average eye appeal.`;
}

export const demoSignals: CoinPhotoSignals = {
  luster: 72,
  strike: 68,
  surface: 70,
  eyeAppeal: 76,
  wear: 8,
  marks: 28,
};
