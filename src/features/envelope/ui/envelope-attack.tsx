import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$envelope, setAttack} from "#/features/envelope/model/store";
import {
  ENVELOPE_DEFAULT_ATTACK,
  ENVELOPE_MAX_ATTACK,
  ENVELOPE_MIN_ATTACK
} from "#/features/envelope/constants/envelope";

const EnvelopeAttack = () => {
  const filter = useUnit($envelope);
  
  return (
    <Knob
      label="Attack"
      min={ENVELOPE_MIN_ATTACK}
      max={ENVELOPE_MAX_ATTACK}
      default={ENVELOPE_DEFAULT_ATTACK}
      value={filter().attack}
      onValueChange={newValue => setAttack(newValue)}
    />
  );
}

export default EnvelopeAttack;