import VolumeControl from "#/features/volume-control/ui";
import "../styles/index.scss"
import EqualizerBoard from "#/widgets/equalizer-board/ui";
import ReverberationBoard from "#/widgets/reverberation-board/ui";

type ControlBoardProps = {}

const ControlBoard = (props: ControlBoardProps) => {
  return (
    <div class="space-y-4">
      <VolumeControl />
      <EqualizerBoard />
      <ReverberationBoard />
    </div>
  );
}

export default ControlBoard;