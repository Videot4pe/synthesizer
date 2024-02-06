import "../styles/index.scss"
import {createSignal, onCleanup, onMount, Show} from "solid-js";
import Tone from "tone";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";
import Spectrogram from "#/entities/sound-display/ui/spectrogram";
import Waveform from "#/entities/sound-display/ui/waveform";

type SoundDisplayProps = {}

const SoundDisplay = (props: SoundDisplayProps) => {
  const [isFft, setIsFft] = createSignal(false)
  return (
    <div class="sound-display">
      <button onClick={() => setIsFft(!isFft())}>Fft</button>
      <Show when={isFft()} fallback={<Waveform />}>
        <Spectrogram />
      </Show>
    </div>
  );
}

export default SoundDisplay;