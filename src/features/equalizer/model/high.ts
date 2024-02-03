import { createStore, createEvent } from 'effector';
import { audioController } from "#/shared/lib/audio-controller/audio-controller";
import { persist } from 'effector-storage/local'
import {FilterBand} from "#/shared/model/equalizer";

export const setHighFilter = createEvent<FilterBand>();
export const $highFilter = createStore<FilterBand>({
  type: 'highpass',
  frequency: 1000,
  Q: 1,
  gain: 0
}).on(setHighFilter, (_, filter) => filter);

$highFilter.watch((filter) => {
  audioController.updateBand(2, filter);
});

persist({ store: $highFilter, key: 'high-filter' })