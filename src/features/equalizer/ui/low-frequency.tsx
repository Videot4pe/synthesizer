import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$lowFilter, setLowFilter} from "#/features/equalizer/model/low";

const LowFrequency = () => {
  const filter = useUnit($lowFilter);
  
  return (
    <Knob
      label="Low Frequency"
      min={0}
      max={10000}
      value={filter().frequency || 0}
      onValueChange={newValue => setLowFilter({ ...filter(), frequency: newValue })}
    />
  );
}

export default LowFrequency;