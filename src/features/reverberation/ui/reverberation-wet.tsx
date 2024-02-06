import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$audioEffects, setWet} from "#/features/reverberation/model/store";
import {
  DEFAULT_WET_LEVEL,
  MAX_WET_LEVEL,
  MIN_WET_LEVEL
} from "#/features/reverberation/constants/reverberation";

const ReverberationWet = () => {
  const filter = useUnit($audioEffects);
  
  return (
    <Knob
      label="Wet"
      min={MIN_WET_LEVEL}
      max={MAX_WET_LEVEL}
      default={DEFAULT_WET_LEVEL}
      value={filter().wet}
      onValueChange={newValue => setWet(newValue)}
    />
  );
}

export default ReverberationWet;