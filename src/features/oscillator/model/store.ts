import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";
import Tone from "tone";

export const setOscillatorType = createEvent<Tone.ToneOscillatorType>();

const $oscillatorType = createStore<Tone.ToneOscillatorType>('sine');

$oscillatorType.on(setOscillatorType, (_, value) => value);

export const $oscillator = combine({
  oscillatorType: $oscillatorType,
});

$oscillator.watch((state) => {
  synthesizerEngine.setOscillatorParam({ type: state.oscillatorType })
});

persist({ store: $oscillatorType, key: 'oscillator-type' })