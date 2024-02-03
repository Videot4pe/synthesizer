export class Gain {
  private readonly gainNode: GainNode;
  
  constructor(audioContext: AudioContext, analyserNode: AnalyserNode) {
    this.gainNode = audioContext.createGain();
    this.gainNode.connect(analyserNode);
  }
  
  get node() {
    return this.gainNode
  }
}