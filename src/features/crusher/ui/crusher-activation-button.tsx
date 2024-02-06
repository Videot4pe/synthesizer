import {useUnit} from "effector-solid";
import ActivationButton from "#/shared/ui/activation-button/ui";
import {$crusher, setIsActive} from "#/features/crusher/model/store";

const CrusherActivationButton = () => {
  const filter = useUnit($crusher);
  
  return (
    <ActivationButton value={filter().isActive} onValueChange={newValue => setIsActive(newValue)} />
  );
}

export default CrusherActivationButton;