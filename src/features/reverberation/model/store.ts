import { createEvent, createStore, combine } from 'effector';
import {audioController} from "#/shared/lib/audio-controller/audio-controller";
import {persist} from "effector-storage/local";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

export const setWet = createEvent<number>();
export const setPreDelay = createEvent<number>();
export const setDecay = createEvent<number>();
export const setRoomSize = createEvent<number>();

const $wet = createStore<number>(0.3);
const $preDelay = createStore<number>(0.6);
const $decay = createStore<number>(2);
const $roomSize = createStore<number>(0.7);

$wet.on(setWet, (_, level) => level);
$preDelay.on(setPreDelay, (_, time) => time);
$decay.on(setDecay, (_, time) => time);
$roomSize.on(setRoomSize, (_, size) => size);

export const $audioEffects = combine({
  wet: $wet,
  preDelay: $preDelay,
  decay: $decay,
  roomSize: $roomSize
});

$audioEffects.watch((state) => {
  synthesizerEngine.setReverbParam('wet', state.wet)
  synthesizerEngine.setReverbParam('preDelay', state.preDelay)
  synthesizerEngine.setReverbParam('decay', state.decay)
  synthesizerEngine.setReverbParam('roomSize', state.roomSize)
});

persist({ store: $wet, key: 'wet' })
persist({ store: $preDelay, key: 'pre-delay' })
persist({ store: $decay, key: 'decay' })
persist({ store: $roomSize, key: 'room-size' })