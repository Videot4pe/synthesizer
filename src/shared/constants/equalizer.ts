import {FilterBand} from "#/shared/model/equalizer";

export const BANDS: FilterBand[] = [
  { type: 'lowpass', frequency: 60, gain: -5 },    // Низкие частоты
  { type: 'peaking', frequency: 1000, gain: 3 },   // Средние частоты
  { type: 'highpass', frequency: 8000, gain: -2 }   // Высокие частоты
];