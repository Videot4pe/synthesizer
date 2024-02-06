import {FilterBand} from "#/shared/model/equalizer";

export const BANDS: FilterBand[] = [
  { type: 'lowpass', frequency: 60, gain: -5 },    // Низкие частоты
  { type: 'peaking', frequency: 1000, gain: 3 },   // Средние частоты
  { type: 'highpass', frequency: 8000, gain: -2 }   // Высокие частоты
];

export const MIN_HIGH_GAIN = -10
export const MAX_HIGH_GAIN = 10
export const DEFAULT_HIGH_GAIN = 0

export const MIN_MID_GAIN = -10
export const MAX_MID_GAIN = 10
export const DEFAULT_MID_GAIN = 0

export const MIN_LOW_GAIN = -10
export const MAX_LOW_GAIN = 10
export const DEFAULT_LOW_GAIN = 0