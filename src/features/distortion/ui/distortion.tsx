import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {
  DISTORTION_DEFAULT_DISTORTION,
  DISTORTION_MAX_DISTORTION,
  DISTORTION_MIN_DISTORTION
} from "#/features/distortion/constants/distortion";
import {$distortion, setDistortion} from "#/features/distortion/model/store";

const DistortionDistortion = () => {
  const filter = useUnit($distortion);
  
  return (
    <Knob
      label="Distortion"
      min={DISTORTION_MIN_DISTORTION}
      max={DISTORTION_MAX_DISTORTION}
      default={DISTORTION_DEFAULT_DISTORTION}
      value={filter().distortion}
      onValueChange={newValue => setDistortion(newValue)}
    />
  );
}

export default DistortionDistortion;