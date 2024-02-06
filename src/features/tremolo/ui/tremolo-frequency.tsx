import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$tremolo, setFrequency} from "#/features/tremolo/model/store";
import {DEFAULT_FREQUENCY, MAX_FREQUENCY, MIN_FREQUENCY} from "#/features/tremolo/constants/tremolo";

const TremoloFrequency = () => {
  const filter = useUnit($tremolo);
  
  return (
    <Knob
      label="Frequency"
      min={MIN_FREQUENCY}
      max={MAX_FREQUENCY}
      default={DEFAULT_FREQUENCY}
      value={filter().frequency}
      onValueChange={newValue => setFrequency(newValue)}
    />
  );
}

export default TremoloFrequency;