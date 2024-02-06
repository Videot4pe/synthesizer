import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$envelope, setSustain} from "#/features/envelope/model/store";
import {
  ENVELOPE_DEFAULT_SUSTAIN,
  ENVELOPE_MAX_SUSTAIN,
  ENVELOPE_MIN_SUSTAIN
} from "#/features/envelope/constants/envelope";

const EnvelopeSustain = () => {
  const filter = useUnit($envelope);
  
  return (
    <Knob
      label="Sustain"
      min={ENVELOPE_MIN_SUSTAIN}
      max={ENVELOPE_MAX_SUSTAIN}
      default={ENVELOPE_DEFAULT_SUSTAIN}
      value={filter().sustain}
      onValueChange={newValue => setSustain(newValue)}
    />
  );
}

export default EnvelopeSustain;