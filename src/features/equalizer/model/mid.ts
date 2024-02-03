import { createStore, createEvent } from 'effector';
import { audioController } from "#/shared/lib/audio-controller/audio-controller";
import { persist } from 'effector-storage/local'
import {FilterBand} from "#/shared/model/equalizer";

export const setMidFilter = createEvent<FilterBand>();
export const $midFilter = createStore<FilterBand>({
  type: 'peaking',
  frequency: 600,
  Q: 1,
  gain: 0
}).on(setMidFilter, (_, filter) => filter);

$midFilter.watch((filter) => {
  audioController.updateBand(1, filter);
});

persist({ store: $midFilter, key: 'mid-filter' })