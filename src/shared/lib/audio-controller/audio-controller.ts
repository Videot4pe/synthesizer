import {BANDS} from "#/shared/constants/equalizer";
import {Equalizer} from "#/shared/lib/audio-controller/equalizer";
import {Oscillator} from "#/shared/lib/audio-controller/oscillator";
import {Gain} from "#/shared/lib/audio-controller/gain";
import {Analyser} from "#/shared/lib/audio-controller/analyser";
import {Reverberator} from "#/shared/lib/audio-controller/reverberator";
import {FilterBand} from "#/shared/model/equalizer";

class AudioController {
  private readonly audioContext: AudioContext;
  
  private readonly gain: Gain;
  private readonly analyser: Analyser;
  private oscillator: Oscillator;
  public equalizer: Equalizer;
  public reverberator: Reverberator;
  
  private isPlaying: boolean = false;
  
  constructor() {
    this.audioContext = new AudioContext();
    
    this.equalizer = new Equalizer(this.audioContext, BANDS);
    // this.equalizer.connect()
    this.reverberator = new Reverberator(this.audioContext);
    
    this.analyser = new Analyser(this.audioContext);
    this.gain = new Gain(this.audioContext, this.analyser.node);
    this.oscillator = new Oscillator(this.audioContext, this.gain.node);
    
    this.gain.node.connect(this.analyser.node);
    this.analyser.node.connect(this.audioContext.destination);
    this.equalizer.connect(this.audioContext.destination)
    
    this.setVolume(0);
  }
  
  setVolume(volume: number) {
    if (this.gain.node) {
      this.gain.node.gain.setValueAtTime(volume, this.audioContext.currentTime);
    } else {
      console.error('GainNode не инициализирован');
    }
  }
  
  setFrequency(frequency: number) {
    if (this.gain.node) {
      this.oscillator.setFrequency(frequency)
    } else {
      console.error('GainNode не инициализирован');
    }
  }
  
  updateBand(bandIndex: number, band: FilterBand) {
    this.equalizer.updateBand(bandIndex, band)
  }
  
  getAnalyserNode() {
    return this.analyser.node;
  }
  
  play() {
    if (!this.isPlaying) {
      this.audioContext.resume().then(() => {
        this.oscillator.play()
        this.isPlaying = true;
      });
    }
  }
  
  stop() {
    if (this.isPlaying) {
      this.audioContext.suspend().then(() => {
        this.isPlaying = false;
        this.oscillator.stop()
      })
    }
  }
  
  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }
}

export const audioController = new AudioController();
