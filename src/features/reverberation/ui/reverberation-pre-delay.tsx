import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$audioEffects, setPreDelay} from "#/features/reverberation/model/store";
import {
  DEFAULT_DELAY_TIME,
  MAX_DELAY_TIME,
  MIN_DELAY_TIME
} from "#/features/reverberation/constants/reverberation";

const ReverberationPreDelay = () => {
  const filter = useUnit($audioEffects);
  
  return (
    <Knob
      label="Delay"
      min={MIN_DELAY_TIME}
      max={MAX_DELAY_TIME}
      default={DEFAULT_DELAY_TIME}
      value={filter().preDelay}
      onValueChange={newValue => setPreDelay(newValue)}
    />
  );
}

export default ReverberationPreDelay;