import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";
import {DISTORTION_DEFAULT_DISTORTION, DISTORTION_DEFAULT_WET} from "#/features/distortion/constants/distortion";

export const setIsActive = createEvent<boolean>();
export const setDistortion = createEvent<number>();
export const setWet = createEvent<number>();

const $isActive = createStore<boolean>(false);
const $distortionDistortion = createStore<number>(DISTORTION_DEFAULT_DISTORTION);
const $wet = createStore<number>(DISTORTION_DEFAULT_WET);

$isActive.on(setIsActive, (_, value) => value);
$distortionDistortion.on(setDistortion, (_, value) => value);
$wet.on(setWet, (_, value) => value);

export const $distortion = combine({
  isActive: $isActive,
  distortion: $distortionDistortion,
  wet: $wet,
});

$distortion.watch((state) => {
  state.isActive ? synthesizerEngine.turnOn('distortion') : synthesizerEngine.turnOff('distortion')
  synthesizerEngine.setDistortionParam('distortion', state.distortion);
  synthesizerEngine.setDistortionParam('wet', state.wet);
});

persist({ store: $isActive, key: 'distortion-is-active' })
persist({ store: $distortionDistortion, key: 'distortion-distortion' })
persist({ store: $wet, key: 'distortion-wet' })
