import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";

export const setIsActive = createEvent<boolean>();
export const setFrequency = createEvent<number>();
export const setDepth = createEvent<number>();

const $isActive = createStore<boolean>(false);
const $frequency = createStore<number>(9);
const $depth = createStore<number>(.75);

$isActive.on(setIsActive, (_, value) => value);
$frequency.on(setFrequency, (_, frequency) => frequency);
$depth.on(setDepth, (_, depth) => depth);

export const $tremolo = combine({
  isActive: $isActive,
  frequency: $frequency,
  depth: $depth
});

$tremolo.watch((state) => {
  state.isActive ? synthesizerEngine.turnOn('tremolo') : synthesizerEngine.turnOff('tremolo')
  synthesizerEngine.setTremoloParam('frequency', state.frequency)
  synthesizerEngine.setTremoloParam('depth', state.depth)
});

persist({ store: $isActive, key: 'tremolo-is-active' })
persist({ store: $frequency, key: 'tremolo-frequency' })
persist({ store: $depth, key: 'tremolo-depth' })