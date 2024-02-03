export type ReverberationProps = {
  label: string;
  min: number;
  max: number;
  effectKey: ReverberationSettings;
};

export enum ReverberationSettings {
  reverbLevel = 'reverbLevel',
  dryLevel = 'dryLevel',
  wetLevel = 'wetLevel',
  delayTime = 'delayTime',
  decayTime = 'decayTime',
}