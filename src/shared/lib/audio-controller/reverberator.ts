export class Reverberator {
  private readonly gainNode: GainNode;
  
  constructor(audioContext: AudioContext) {
    this.gainNode = audioContext.createGain();
  }
  
  get node() {
    return this.gainNode
  }
}