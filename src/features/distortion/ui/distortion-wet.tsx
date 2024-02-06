import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {
  DISTORTION_DEFAULT_WET,
  DISTORTION_MAX_WET,
  DISTORTION_MIN_WET
} from "#/features/distortion/constants/distortion";
import {$distortion, setWet} from "#/features/distortion/model/store";

const DistortionWet = () => {
  const filter = useUnit($distortion);
  
  return (
    <Knob
      label="Wet"
      min={DISTORTION_MIN_WET}
      max={DISTORTION_MAX_WET}
      default={DISTORTION_DEFAULT_WET}
      value={filter().distortion}
      onValueChange={newValue => setWet(newValue)}
    />
  );
}

export default DistortionWet;