import { createStore, createEvent } from 'effector';
import { audioController } from "#/shared/lib/audio-controller/audio-controller";
import { persist } from 'effector-storage/local'
import {synth} from "#/shared/lib/audio-engine";

export const setVolume = createEvent<number>();
export const $volume = createStore<number>(0).on(setVolume, (_, volume) => {
  // audioController.setVolume(volume);
  return volume;
});

$volume.watch((volume) => {
  // audioController.setVolume(volume);
  synth.volume.value = volume
});

persist({ store: $volume, key: 'volume' })