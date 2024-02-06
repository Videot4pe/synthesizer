import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$midFilter, setMidFilter} from "#/features/equalizer/model/mid";
import {
  DEFAULT_MID_GAIN,
  MAX_MID_GAIN,
  MIN_MID_GAIN
} from "#/features/equalizer/constants/equalizer";

const MidGain = () => {
  const filter = useUnit($midFilter);
  
  return (
    <Knob
      label="Mid Gain"
      min={MIN_MID_GAIN}
      max={MAX_MID_GAIN}
      default={DEFAULT_MID_GAIN}
      value={filter().gain || 0}
      onValueChange={newValue => setMidFilter({ ...filter(), gain: newValue })}
    />
  );
}

export default MidGain;