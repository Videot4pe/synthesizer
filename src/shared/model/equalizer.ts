export type FilterBand = {
  type: BiquadFilterType;
  frequency: number;
  Q?: number;
  gain?: number;
};