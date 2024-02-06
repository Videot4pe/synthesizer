import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$chorus, setFrequency} from "#/features/chorus/model/store";
import {CHORUS_DEFAULT_FREQUENCY, CHORUS_MAX_FREQUENCY, CHORUS_MIN_FREQUENCY} from "#/features/chorus/constants/chorus";

const ChorusFrequency = () => {
  const filter = useUnit($chorus);
  
  return (
    <Knob
      label="Frequency"
      min={CHORUS_MIN_FREQUENCY}
      max={CHORUS_MAX_FREQUENCY}
      default={CHORUS_DEFAULT_FREQUENCY}
      value={filter().frequency}
      onValueChange={newValue => setFrequency(newValue)}
    />
  );
}

export default ChorusFrequency;