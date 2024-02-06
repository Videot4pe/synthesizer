import { createStore, createEvent } from 'effector';
import { audioController } from "#/shared/lib/audio-controller/audio-controller";
import { persist } from 'effector-storage/local'
import {FilterBand} from "#/shared/model/equalizer";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

export const setMidFilter = createEvent<FilterBand>();
export const $midFilter = createStore<FilterBand>({
  type: 'peaking',
  frequency: 600,
  Q: 1,
  gain: 0
}).on(setMidFilter, (_, filter) => filter);

$midFilter.watch((filter) => {
  synthesizerEngine.setEqParam('mid', filter.gain)
});

persist({ store: $midFilter, key: 'mid-filter' })