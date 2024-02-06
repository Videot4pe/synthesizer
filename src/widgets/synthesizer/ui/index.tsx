import "../styles/index.scss"
import Keyboard from "#/widgets/keyboard/ui";
import ControlBoard from "#/widgets/control-board/ui";
import SoundDisplay from "#/entities/sound-display/ui";

const Synthesizer = () => {
  return (
    <div class="synthesizer bg-red-600 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline w-full">
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