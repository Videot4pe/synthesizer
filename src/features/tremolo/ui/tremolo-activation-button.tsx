import {useUnit} from "effector-solid";
import ActivationButton from "#/shared/ui/activation-button/ui";
import {$tremolo, setIsActive} from "#/features/tremolo/model/store";

const TremoloActivationButton = () => {
  const filter = useUnit($tremolo);
  
  return (
    <ActivationButton value={filter().isActive} onValueChange={newValue => setIsActive(newValue)} />
  );
}

export default TremoloActivationButton;