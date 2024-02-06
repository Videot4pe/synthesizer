import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";

export const setAttack = createEvent<number>();
export const setDecay = createEvent<number>();
export const setRelease = createEvent<number>();
export const setSustain = createEvent<number>();

const $attack = createStore<number>(100);
const $decay = createStore<number>(.5);
const $release = createStore<number>(1);
const $sustain = createStore<number>(1);

$attack.on(setAttack, (_, value) => value);
$decay.on(setDecay, (_, value) => value);
$release.on(setRelease, (_, value) => value);
$sustain.on(setSustain, (_, value) => value);

export const $envelope = combine({
  attack: $attack,
  decay: $decay,
  release: $release,
  sustain: $sustain
});

$envelope.watch((state) => {
  synthesizerEngine.setEnvelopeParam(state)
});

persist({ store: $attack, key: 'envelope-attack' })
persist({ store: $decay, key: 'envelope-decay' })
persist({ store: $release, key: 'envelope-release' })
persist({ store: $sustain, key: 'envelope-sustain' })