import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$pitchShift, setPitch} from "#/features/pitch-shift/model/store";
import {
  PITCH_SHIFT_DEFAULT_PITCH,
  PITCH_SHIFT_MAX_PITCH,
  PITCH_SHIFT_MIN_PITCH
} from "#/features/pitch-shift/constants/pitch-shift";

const PitchShiftPitch = () => {
  const filter = useUnit($pitchShift);
  
  return (
    <Knob
      label="Pitch"
      min={PITCH_SHIFT_MIN_PITCH}
      max={PITCH_SHIFT_MAX_PITCH}
      default={PITCH_SHIFT_DEFAULT_PITCH}
      value={filter().pitch}
      onValueChange={newValue => setPitch(newValue)}
    />
  );
}

export default PitchShiftPitch;