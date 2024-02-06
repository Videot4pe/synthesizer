import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";
import {
  CHORUS_DEFAULT_DELAY_TIME,
  CHORUS_DEFAULT_DEPTH,
  CHORUS_DEFAULT_FREQUENCY
} from "#/features/chorus/constants/chorus";

export const setIsActive = createEvent<boolean>();
export const setFrequency = createEvent<number>();
export const setDelayTime = createEvent<number>();
export const setDepth = createEvent<number>();

const $isActive = createStore<boolean>(false);
const $frequency = createStore<number>(CHORUS_DEFAULT_FREQUENCY);
const $delayTime = createStore<number>(CHORUS_DEFAULT_DELAY_TIME);
const $depth = createStore<number>(CHORUS_DEFAULT_DEPTH);

$isActive.on(setIsActive, (_, value) => value);
$frequency.on(setFrequency, (_, frequency) => frequency);
$delayTime.on(setDelayTime, (_, time) => time);
$depth.on(setDepth, (_, depth) => depth);

export const $chorus = combine({
  isActive: $isActive,
  frequency: $frequency,
  delayTime: $delayTime,
  depth: $depth
});

$chorus.watch((state) => {
  state.isActive ? synthesizerEngine.turnOn('chorus') : synthesizerEngine.turnOff('chorus')
  synthesizerEngine.setChorusParam('frequency', state.frequency)
  synthesizerEngine.setChorusParam('delayTime', state.delayTime)
  synthesizerEngine.setChorusParam('depth', state.depth)
});

persist({ store: $isActive, key: 'chorus-is-active' })
persist({ store: $frequency, key: 'chorus-frequency' })
persist({ store: $delayTime, key: 'chorus-delay-time' })
persist({ store: $depth, key: 'chorus-depth' })