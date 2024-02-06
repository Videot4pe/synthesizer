import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {$chorus, setDelayTime} from "#/features/chorus/model/store";
import {CHORUS_MIN_DELAY_TIME, CHORUS_MAX_DELAY_TIME, CHORUS_DEFAULT_DELAY_TIME} from "#/features/chorus/constants/chorus";

const ChorusDelayTime = () => {
  const filter = useUnit($chorus);
  
  return (
    <Knob
      label="Delay Time"
      min={CHORUS_MIN_DELAY_TIME}
      max={CHORUS_MAX_DELAY_TIME}
      default={CHORUS_DEFAULT_DELAY_TIME}
      value={filter().delayTime}
      onValueChange={newValue => setDelayTime(newValue)}
    />
  );
}

export default ChorusDelayTime;