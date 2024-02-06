import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";
import { PITCH_SHIFT_DEFAULT_PITCH } from "#/features/pitch-shift/constants/pitch-shift";

export const setIsActive = createEvent<boolean>();
export const setPitch = createEvent<number>();

const $isActive = createStore<boolean>(false);
const $pitch = createStore<number>(PITCH_SHIFT_DEFAULT_PITCH);

$isActive.on(setIsActive, (_, value) => value);
$pitch.on(setPitch, (_, value) => value);

export const $pitchShift = combine({
  isActive: $isActive,
  pitch: $pitch,
});

$pitchShift.watch((state) => {
  state.isActive ? synthesizerEngine.turnOn('pitchShift') : synthesizerEngine.turnOff('pitchShift')
  synthesizerEngine.setPitchShiftParam('pitch', state.pitch)
});

persist({ store: $isActive, key: 'pitch-shift-is-active' })
persist({ store: $pitch, key: 'pitch-shift-pitch' })