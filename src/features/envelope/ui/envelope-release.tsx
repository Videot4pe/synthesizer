import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$envelope, setRelease} from "#/features/envelope/model/store";
import {
  ENVELOPE_DEFAULT_RELEASE,
  ENVELOPE_MAX_RELEASE,
  ENVELOPE_MIN_RELEASE
} from "#/features/envelope/constants/envelope";

const EnvelopeRelease = () => {
  const filter = useUnit($envelope);
  
  return (
    <Knob
      label="Release"
      min={ENVELOPE_MIN_RELEASE}
      max={ENVELOPE_MAX_RELEASE}
      default={ENVELOPE_DEFAULT_RELEASE}
      value={filter().release}
      onValueChange={newValue => setRelease(newValue)}
    />
  );
}

export default EnvelopeRelease;