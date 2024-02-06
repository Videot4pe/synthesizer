import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$highFilter, setHighFilter} from "#/features/equalizer/model/high";

const HighFrequency = () => {
  const filter = useUnit($highFilter);
  
  return (
    <Knob
      label="High Frequency"
      min={0}
      max={10000}
      value={filter().frequency || 0}
      onValueChange={newValue => setHighFilter({ ...filter(), frequency: newValue })}
    />
  );
}

export default HighFrequency;