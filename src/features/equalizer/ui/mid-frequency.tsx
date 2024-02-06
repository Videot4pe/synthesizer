import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$midFilter, setMidFilter} from "#/features/equalizer/model/mid";

const HighFrequency = () => {
  const filter = useUnit($midFilter);
  
  return (
    <Knob
      label="Mid Frequency"
      min={0}
      max={10000}
      value={filter().frequency || 0}
      onValueChange={newValue => setMidFilter({ ...filter(), frequency: newValue })}
    />
  );
}

export default HighFrequency;