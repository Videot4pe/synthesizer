import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$tremolo, setDepth} from "#/features/tremolo/model/store";
import {DEFAULT_DEPTH, MAX_DEPTH, MIN_DEPTH} from "#/features/tremolo/constants/tremolo";

const TremoloDepth = () => {
  const filter = useUnit($tremolo);
  
  return (
    <Knob
      label="Depth"
      min={MIN_DEPTH}
      max={MAX_DEPTH}
      default={DEFAULT_DEPTH}
      value={filter().depth}
      onValueChange={newValue => setDepth(newValue)}
    />
  );
}

export default TremoloDepth;