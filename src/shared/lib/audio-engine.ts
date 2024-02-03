import * as Tone from 'tone';

export const synth = new Tone.PolySynth(Tone.Synth).toDestination();
export const eq = new Tone.EQ3().toDestination();
export const reverb = new Tone.Reverb().toDestination();
export const volume = new Tone.Volume().toDestination();

synth.connect(eq);
synth.connect(volume);
eq.connect(reverb);
