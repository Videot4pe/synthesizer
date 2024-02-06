import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {
  CRUSHER_DEFAULT_BITS,
  CRUSHER_MAX_BITS,
  CRUSHER_MIN_BITS
} from "#/features/crusher/constants/crusher";
import {$crusher, setCrusherBits} from "#/features/crusher/model/store";

const CrusherBits = () => {
  const filter = useUnit($crusher);
  
  return (
    <Knob
      label="Crusher"
      min={CRUSHER_MIN_BITS}
      max={CRUSHER_MAX_BITS}
      default={CRUSHER_DEFAULT_BITS}
      step={1}
      value={filter().bits}
      onValueChange={newValue => setCrusherBits(newValue)}
    />
  );
}

export default CrusherBits;