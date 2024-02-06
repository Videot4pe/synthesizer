import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$chorus, setDepth} from "#/features/chorus/model/store";
import {CHORUS_DEFAULT_DEPTH, CHORUS_MAX_DEPTH, CHORUS_MIN_DEPTH} from "#/features/chorus/constants/chorus";

const ChorusDepth = () => {
  const filter = useUnit($chorus);
  
  return (
    <Knob
      label="Depth"
      min={CHORUS_MIN_DEPTH}
      max={CHORUS_MAX_DEPTH}
      default={CHORUS_DEFAULT_DEPTH}
      value={filter().depth}
      onValueChange={newValue => setDepth(newValue)}
    />
  );
}

export default ChorusDepth;