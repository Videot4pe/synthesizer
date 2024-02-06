import { createStore, createEvent } from 'effector';
import { persist } from 'effector-storage/local'
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

export const setVolume = createEvent<number>();
export const $volume = createStore<number>(0).on(setVolume, (_, volume) => volume);

$volume.watch((volume) => {
  synthesizerEngine.setVolume(volume);
});

persist({ store: $volume, key: 'volume' })