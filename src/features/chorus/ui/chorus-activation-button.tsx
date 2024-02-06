import {useUnit} from "effector-solid";
import ActivationButton from "#/shared/ui/activation-button/ui";
import {$chorus, setIsActive} from "#/features/chorus/model/store";

const ChorusActivationButton = () => {
  const filter = useUnit($chorus);
  
  return (
    <ActivationButton value={filter().isActive} onValueChange={newValue => setIsActive(newValue)} />
  );
}

export default ChorusActivationButton;