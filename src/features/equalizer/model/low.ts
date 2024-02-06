import { createStore, createEvent } from 'effector';
import { audioController } from "#/shared/lib/audio-controller/audio-controller";
import { persist } from 'effector-storage/local'
import {FilterBand} from "#/shared/model/equalizer";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

export const setLowFilter = createEvent<FilterBand>();
export const $lowFilter = createStore<FilterBand>({
  type: 'lowpass',
  frequency: 100,
  Q: 1,
  gain: 0
}).on(setLowFilter, (_, filterValue) => filterValue);

$lowFilter.watch((filter) => {
  synthesizerEngine.setEqParam('low', filter.gain)
});

persist({ store: $lowFilter, key: 'low-filter' })