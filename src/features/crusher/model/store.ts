import { createEvent, createStore, combine } from 'effector';
import { persist } from "effector-storage/local";
import { synthesizerEngine } from "#/shared/lib/synthesizer-engine";
import { CRUSHER_DEFAULT_BITS } from "#/features/crusher/constants/crusher";

export const setIsActive = createEvent<boolean>();
export const setCrusherBits = createEvent<number>();

const $isActive = createStore<boolean>(false);
const $crusherBits = createStore<number>(CRUSHER_DEFAULT_BITS);

$isActive.on(setIsActive, (_, value) => value);
$crusherBits.on(setCrusherBits, (_, value) => value);

export const $crusher = combine({
  isActive: $isActive,
  bits: $crusherBits,
});

$crusher.watch((state) => {
  state.isActive ? synthesizerEngine.turnOn('crusher') : synthesizerEngine.turnOff('crusher')
  synthesizerEngine.setCrusherBits('bits', state.bits);
});

persist({ store: $isActive, key: 'crusher-is-active' })
persist({ store: $crusherBits, key: 'crusher-bits' })
