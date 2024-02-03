import "../styles/index.scss"
import Keyboard from "#/widgets/keyboard/ui";
import ControlBoard from "#/widgets/control-board/ui";
import SoundDisplay from "#/entities/sound-display/ui";

const Synthesizer = () => {
  return (
    <div class="synthesizer w-full">
      <div class="p-8 space-y-4">
        <div class="text-center text-text-secondary">Synthesizer</div>
        <hr />
        <ControlBoard />
        <hr />
        <SoundDisplay />
      </div>
      <Keyboard className="self-end" />
    </div>
  );
}

export default Synthesizer;