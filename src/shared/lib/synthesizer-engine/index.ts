import * as Tone from 'tone';

class SynthesizerEngine {
  private synth: Tone.PolySynth<Tone.Synth>;
  private eq: Tone.EQ3;
  private reverb: Tone.Reverb;
  
  constructor() {
    this.synth = new Tone.PolySynth(Tone.Synth).toDestination();
    this.eq = new Tone.EQ3().toDestination();
    this.reverb = new Tone.Reverb().toDestination();
    
    this.synth.connect(this.eq);
    this.eq.connect(this.reverb);
  }
  
  setVolume(value: number): void {
    this.synth.volume.value = value;
  }
  
  getVolume(): number {
    return this.synth.volume.value;
  }
  
  setSynthParam(param: string, value: any): void {
    this.synth.set({ [param]: value });
  }
  
  setEqParam(band: 'low' | 'mid' | 'high', value: number): void {
    this.eq.set({ [band]: value });
  }
  
  setReverbParam(param: string, value: any): void {
    this.reverb.set({ [param]: value });
  }
  
  triggerAttackRelease(note: string | number, duration: string): void {
    this.synth.triggerAttackRelease(note, duration);
  }
}

export const synthesizerEngine = new SynthesizerEngine()