import * as Tone from 'tone';
import {Envelope} from "#/shared/model/envelope";
import {Oscillator} from "#/shared/model/oscillator";

class SynthesizerEngine {
  private readonly synthesizer: Tone.PolySynth<Tone.Synth>;
  private readonly eq: Tone.EQ3;
  private readonly osc: Tone.Oscillator;
  
  private readonly analyser: Tone.Analyser;
  private readonly fft: Tone.FFT;
  
  private readonly reverb: Tone.Reverb;
  private readonly delay: Tone.Delay;
  private readonly chorus: Tone.Chorus;
  private readonly tremolo: Tone.Tremolo;
  private readonly pitchShift: Tone.PitchShift;
  private readonly distortion: Tone.Distortion;
  private readonly crusher: Tone.BitCrusher;
  
  constructor() {
    // TODO start values (?)
    this.synthesizer = new Tone.PolySynth(Tone.Synth).toDestination();
    
    this.eq = new Tone.EQ3().toDestination();
    this.osc = new Tone.Oscillator().toDestination();
    
    this.reverb = new Tone.Reverb().toDestination();
    this.delay = new Tone.Delay().toDestination();
    this.chorus = new Tone.Chorus().toDestination();
    this.tremolo = new Tone.Tremolo().toDestination().start();
    this.pitchShift = new Tone.PitchShift().toDestination();
    this.distortion = new Tone.Distortion().toDestination();
    this.crusher = new Tone.BitCrusher().toDestination();
    
    this.analyser = new Tone.Analyser('waveform', 1024);
    this.fft = new Tone.FFT(1024);
    
    this.synthesizer.connect(this.analyser);
    this.synthesizer.connect(this.fft);
    this.synthesizer.connect(this.eq);
    // this.synthesizer.connect(this.osc);
    
    this.synthesizer.connect(this.reverb);
    this.synthesizer.connect(this.delay);
    this.synthesizer.connect(this.chorus);
    this.synthesizer.connect(this.tremolo);
    this.synthesizer.connect(this.pitchShift);
    this.synthesizer.connect(this.distortion);
    this.synthesizer.connect(this.crusher);
  }
  
  setVolume(value: number): void {
    this.synthesizer.volume.value = value;
  }
  
  getVolume(): number {
    return this.synthesizer.volume.value;
  }
  
  getAnalyser(): Tone.Analyser {
    return this.analyser;
  }
  
  getFft(): Tone.FFT {
    return this.fft;
  }
  
  setSynthParam(param: string, value: any): void {
    this.synthesizer.set({ [param]: value });
  }
  
  setEqParam(band: 'low' | 'mid' | 'high', value: number): void {
    this.eq.set({ [band]: value });
  }
  
  async setReverbParam(param: string, value: any) {
    this.reverb.set({ [param]: value });
    await this.reverb.generate();
  }
  
  async setChorusParam(param: 'frequency' | 'delayTime' | 'depth', value: any) {
    this.chorus.set({ [param]: value });
  }
  
  async setCrusherBits(param: 'bits', value: any) {
    this.crusher.set({ [param]: value });
  }
  
  async setDistortionParam(param: 'distortion' | 'wet', value: any) {
    this.distortion.set({ [param]: value });
  }
  
  async setPitchShiftParam(param: 'pitch', value: any) {
    this.pitchShift.set({ [param]: value });
  }
  
  async setEnvelopeParam(envelope: Envelope) {
    this.synthesizer.set({ ...this.synthesizer.get(), envelope });
  }
  
  async setOscillatorParam(oscillator: Oscillator) {
    this.synthesizer.set({ ...this.synthesizer.get(), oscillator});
  }
  
  async setTremoloParam(param: 'frequency' | 'depth', value: any) {
    this.tremolo.set({ [param]: value });
  }
  
  turnOn(
    widget: 'reverb' | 'delay' | 'chorus' | 'distortion' | 'crusher' | 'pitchShift' | 'tremolo' | 'eq'
  ) {
    this.synthesizer.connect(this[widget])
  }
  
  turnOff(
    widget: 'reverb' | 'delay' | 'chorus' | 'distortion' | 'crusher' | 'pitchShift' | 'tremolo' | 'eq'
  ) {
    this.synthesizer.disconnect(this[widget])
  }
  
  triggerAttackRelease(note: string | number, duration: string): void {
    this.synthesizer.triggerAttackRelease(note, duration);
  }
  
  triggerAttack(note: string | number): void {
    this.synthesizer.triggerAttack(note);
  }
  
  releaseAll(): void {
    this.synthesizer.releaseAll();
  }
  
  triggerRelease(note: string | number, duration?: string): void {
    this.synthesizer.triggerRelease(note, duration);
  }
}

export const synthesizerEngine = new SynthesizerEngine()