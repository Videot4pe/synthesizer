import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";
import {ToneOscillatorType} from "tone";

export const setOscillatorType = createEvent<ToneOscillatorType>();

const $oscillatorType = createStore<ToneOscillatorType>('sine');

$oscillatorType.on(setOscillatorType, (_, value) => value);

export const $oscillator = combine({
  oscillatorType: $oscillatorType,
});

$oscillator.watch((state) => {
  synthesizerEngine.setOscillatorParam(state.oscillatorType);
});

persist({ store: $oscillatorType, key: 'oscillator-type' })