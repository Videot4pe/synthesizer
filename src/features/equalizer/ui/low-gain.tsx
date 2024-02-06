import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$lowFilter, setLowFilter} from "#/features/equalizer/model/low";
import {
  DEFAULT_LOW_GAIN,
  MAX_LOW_GAIN,
  MIN_LOW_GAIN
} from "#/features/equalizer/constants/equalizer";

const LowGain = () => {
  const filter = useUnit($lowFilter);
  
  return (
    <Knob
      label="Low Gain"
      min={MIN_LOW_GAIN}
      max={MAX_LOW_GAIN}
      default={DEFAULT_LOW_GAIN}
      value={filter().gain || 0}
      onValueChange={newValue => setLowFilter({ ...filter(), gain: newValue })}
    />
  );
}

export default LowGain;