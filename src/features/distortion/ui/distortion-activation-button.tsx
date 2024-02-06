import {useUnit} from "effector-solid";
import ActivationButton from "#/shared/ui/activation-button/ui";
import {$distortion, setIsActive} from "#/features/distortion/model/store";

const DistortionActivationButton = () => {
  const filter = useUnit($distortion);
  
  return (
    <ActivationButton value={filter().isActive} onValueChange={newValue => setIsActive(newValue)} />
  );
}

export default DistortionActivationButton;