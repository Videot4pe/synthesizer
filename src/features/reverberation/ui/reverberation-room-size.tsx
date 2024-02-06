import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$audioEffects, setRoomSize} from "#/features/reverberation/model/store";
import {
  DEFAULT_WET_LEVEL,
  MAX_WET_LEVEL,
  MIN_WET_LEVEL
} from "#/features/reverberation/constants/reverberation";

const ReverberationRoomSize = () => {
  const filter = useUnit($audioEffects);
  
  return (
    <Knob
      label="Room Size"
      min={MIN_WET_LEVEL}
      max={MAX_WET_LEVEL}
      default={DEFAULT_WET_LEVEL}
      value={filter().roomSize}
      onValueChange={newValue => setRoomSize(newValue)}
    />
  );
}

export default ReverberationRoomSize;