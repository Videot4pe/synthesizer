import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$audioEffects, setDecay} from "#/features/reverberation/model/store";
import {
  DEFAULT_DECAY_TIME,
  MAX_DECAY_TIME,
  MIN_DECAY_TIME
} from "#/features/reverberation/constants/reverberation";

const ReverberationDecay = () => {
  const filter = useUnit($audioEffects);
  
  return (
    <Knob
      label="Decay"
      min={MIN_DECAY_TIME}
      max={MAX_DECAY_TIME}
      default={DEFAULT_DECAY_TIME}
      value={filter().decay}
      onValueChange={newValue => setDecay(newValue)}
    />
  );
}

export default ReverberationDecay;