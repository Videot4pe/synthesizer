import {Envelope} from "#/shared/model/envelope";
import {
  Analyser, BitCrusher,
  Chorus,
  Delay,
  Distortion,
  EQ3,
  FFT,
  Oscillator,
  PitchShift,
  PolySynth,
  Reverb,
  Synth,
  Tremolo,
  ToneOscillatorType,
  start,
} from "tone";

class SynthesizerEngine {
  private readonly synthesizer: PolySynth<Synth>;
  private readonly eq: EQ3;
  private readonly osc: Oscillator;
  
  private readonly analyser: Analyser;
  private readonly fft: FFT;
  
  private readonly reverb: Reverb;
  private readonly delay: Delay;
  private readonly chorus: Chorus;
  private readonly tremolo: Tremolo;
  private readonly pitchShift: PitchShift;
  private readonly distortion: Distortion;
  private readonly crusher: BitCrusher;
  
  constructor() {
    // TODO start values (?)
    this.synthesizer = new PolySynth(Synth).toDestination();
    
    this.eq = new EQ3().toDestination();
    this.osc = new Oscillator().toDestination();
    
    console.log(this.osc.type)
    
    this.reverb = new Reverb().toDestination();
    this.delay = new Delay().toDestination();
    this.chorus = new Chorus().toDestination();
    this.tremolo = new Tremolo().toDestination().start();
    this.pitchShift = new PitchShift().toDestination();
    this.distortion = new Distortion().toDestination();
    this.crusher = new BitCrusher().toDestination();
    
    this.analyser = new Analyser('waveform', 1024);
    this.fft = new FFT(1024);
    
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
  
  getAnalyser(): Analyser {
    return this.analyser;
  }
  
  getFft(): FFT {
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
  
  async setOscillatorParam(type: ToneOscillatorType) {
    // this.synthesizer.set({ ...this.synthesizer.get(), oscillator: { ...this.osc.get(), type }});
    // @ts-ignore
    this.synthesizer.set({ oscillator: { ...this.synthesizer.get().oscillator, type }})
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
  
  async start() {
    return start()
  }
}

export const synthesizerEngine = new SynthesizerEngine()