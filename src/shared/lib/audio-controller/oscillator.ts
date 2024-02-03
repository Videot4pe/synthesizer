export class Oscillator {
  private audioContext: AudioContext;
  private oscillator: OscillatorNode;
  private readonly gainNode: GainNode;
  
  constructor(audioContext: AudioContext, gainNode: GainNode) {
    this.audioContext = audioContext;
    
    this.gainNode = gainNode;
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.connect(this.gainNode);
    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // A4
    // this.oscillator.start();
    
    this.initOscillator();
  }
  
  public setFrequency(frequency: number) {
    this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
  }
  
  public play() {
    this.oscillator.start();
  }
  
  public stop() {
    this.oscillator.stop();
    this.oscillator.disconnect();
    this.initOscillator();
  }
  
  private initOscillator() {
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.connect(this.gainNode);
    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime);
  }
}