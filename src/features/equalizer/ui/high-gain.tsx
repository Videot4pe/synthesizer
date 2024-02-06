import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$highFilter, setHighFilter} from "#/features/equalizer/model/high";
import {
  DEFAULT_HIGH_GAIN,
  MAX_HIGH_GAIN,
  MIN_HIGH_GAIN
} from "#/features/equalizer/constants/equalizer";

const HighGain = () => {
  const filter = useUnit($highFilter);
  
  return (
    <Knob
      label="High Gain"
      min={MIN_HIGH_GAIN}
      max={MAX_HIGH_GAIN}
      default={DEFAULT_HIGH_GAIN}
      value={filter().gain || 0}
      onValueChange={newValue => setHighFilter({ ...filter(), gain: newValue })}
    />
  );
}

export default HighGain;