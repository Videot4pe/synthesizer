interface EqualizerBandParams {
  type?: BiquadFilterType;
  frequency: number;
  Q?: number;
  gain?: number;
}

export class Equalizer {
  private audioContext: AudioContext;
  private filters: BiquadFilterNode[];
  
  constructor(audioContext: AudioContext, bands: EqualizerBandParams[]) {
    this.audioContext = audioContext;
    this.filters = this.createFilters(bands);
  }
  
  private createFilters(bands: EqualizerBandParams[]): BiquadFilterNode[] {
    const filters: BiquadFilterNode[] = [];
    
    bands.forEach((band) => {
      const filter = this.audioContext.createBiquadFilter();
      filter.type = band.type || 'peaking';
      filter.frequency.value = band.frequency;
      filter.Q.value = band.Q || 1;
      filter.gain.value = band.gain || 0;
      
      if (filters.length > 0) {
        filters[filters.length - 1].connect(filter);
      }
      
      filters.push(filter);
    });
    
    return filters;
  }
  
  public connect(destination: AudioNode): void {
    // source.connect(this.filters[0]);
    this.filters[this.filters.length - 1].connect(destination);
  }
  
  public disconnect(): void {
    this.filters.forEach((filter) => {
      filter.disconnect();
    });
  }
  
  public updateBand(bandIndex: number, params: Partial<EqualizerBandParams>): void {
    const filter = this.filters[bandIndex];
    if (params.frequency !== undefined) filter.frequency.value = params.frequency;
    if (params.gain !== undefined) filter.gain.value = params.gain;
  }
  
  // Возвращаем первый и последний фильтр цепочки, чтобы можно было управлять подключением извне
  public getFirstFilter(): BiquadFilterNode {
    return this.filters[0];
  }
  
  public getLastFilter(): BiquadFilterNode {
    return this.filters[this.filters.length - 1];
  }
}
