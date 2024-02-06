import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$envelope, setDecay} from "#/features/envelope/model/store";
import {
  ENVELOPE_DEFAULT_DECAY,
  ENVELOPE_MAX_DECAY,
  ENVELOPE_MIN_DECAY
} from "#/features/envelope/constants/envelope";

const EnvelopeDecay = () => {
  const filter = useUnit($envelope);
  
  return (
    <Knob
      label="Decay"
      min={ENVELOPE_MIN_DECAY}
      max={ENVELOPE_MAX_DECAY}
      default={ENVELOPE_DEFAULT_DECAY}
      value={filter().decay}
      onValueChange={newValue => setDecay(newValue)}
    />
  );
}

export default EnvelopeDecay;