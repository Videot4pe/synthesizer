import VolumeControl from "#/widgets/volume-control/ui";
import EqualizerControl from "#/widgets/equalizer-control/ui";
import ReverberationControl from "#/widgets/reverberation-control/ui";
import ChorusControl from "#/widgets/chorus-control/ui";
import TremoloControl from "#/widgets/tremolo-control/ui";
import EnvelopeControl from "#/widgets/envelope-control/ui";
import DistortionControl from "#/widgets/distortion-control/ui";
import PitchShiftControl from "#/widgets/pitch-shift-control/ui";
import CrusherControl from "#/widgets/crusher-control/ui";
import OscillatorControl from "#/widgets/oscillator-control/ui";

type ControlBoardProps = {}

const ControlBoard = (props: ControlBoardProps) => {
  return (
    <div class="flex justify-between flex-wrap">
      <VolumeControl />
      <EqualizerControl />
      <ReverberationControl />
      <TremoloControl />
      <ChorusControl />
      <CrusherControl />
      <EnvelopeControl />
      <DistortionControl />
      <PitchShiftControl />
      <OscillatorControl />
    </div>
  );
}

export default ControlBoard;