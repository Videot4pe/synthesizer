export class Analyser {
  private readonly analyserNode: AnalyserNode;
  
  constructor(audioContext: AudioContext) {
    this.analyserNode = audioContext.createAnalyser();
  }
  
  get node() {
    return this.analyserNode
  }
}