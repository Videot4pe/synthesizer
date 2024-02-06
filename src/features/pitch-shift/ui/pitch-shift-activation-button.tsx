import {useUnit} from "effector-solid";
import {$pitchShift, setIsActive} from "#/features/pitch-shift/model/store";
import ActivationButton from "#/shared/ui/activation-button/ui";

const PitchShiftActivationButton = () => {
  const filter = useUnit($pitchShift);
  
  return (
    <ActivationButton value={filter().isActive} onValueChange={newValue => setIsActive(newValue)} />
  );
}

export default PitchShiftActivationButton;