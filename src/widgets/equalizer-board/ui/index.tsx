import "../styles/index.scss"
import LowGain from "#/features/equalizer/ui/low-gain";
import LowFrequency from "#/features/equalizer/ui/low-frequency";
import MidGain from "#/features/equalizer/ui/mid-gain";
import MidFrequency from "#/features/equalizer/ui/mid-frequency";
import HighGain from "#/features/equalizer/ui/high-gain";
import HighFrequency from "#/features/equalizer/ui/high-frequency";

const EqualizerBoard = () => {
  return (
    <div class="flex space-x-4 border-1">
      <div>
        <LowGain />
        <LowFrequency />
      </div>
      <div>
        <MidGain />
        <MidFrequency />
      </div>
      <div>
        <HighGain />
        <HighFrequency />
      </div>
    </div>
  );
}

export default EqualizerBoard;