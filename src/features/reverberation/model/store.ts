import { createEvent, createStore, combine } from 'effector';
import {audioController} from "#/shared/lib/audio-controller/audio-controller";
import {persist} from "effector-storage/local";

// Создаем события для управления реверберацией
export const setReverbLevel = createEvent<number>();
export const setDryLevel = createEvent<number>();
export const setWetLevel = createEvent<number>();
export const setDelayTime = createEvent<number>();
export const setDecayTime = createEvent<number>();

// Создаем отдельные сторы для каждого параметра
const $reverbLevel = createStore<number>(0.5);
const $dryLevel = createStore<number>(0.7);
const $wetLevel = createStore<number>(0.3);
const $delayTime = createStore<number>(0.6);
const $decayTime = createStore<number>(2);

// Связываем события с соответствующими сторами
$reverbLevel.on(setReverbLevel, (_, level) => level);
$dryLevel.on(setDryLevel, (_, level) => level);
$wetLevel.on(setWetLevel, (_, level) => level);
$delayTime.on(setDelayTime, (_, time) => time);
$decayTime.on(setDecayTime, (_, time) => time);

// Объединяем отдельные сторы в один общий стор
export const $audioEffects = combine({
  reverbLevel: $reverbLevel,
  dryLevel: $dryLevel,
  wetLevel: $wetLevel,
  delayTime: $delayTime,
  decayTime: $decayTime
});

$audioEffects.watch((state) => {
  // audioController.updateReverbSettings(state);
});

persist({ store: $reverbLevel, key: 'reverb-level' })
persist({ store: $dryLevel, key: 'dry-level' })
persist({ store: $wetLevel, key: 'wet-level' })
persist({ store: $delayTime, key: 'delay-time' })
persist({ store: $decayTime, key: 'decay-time' })