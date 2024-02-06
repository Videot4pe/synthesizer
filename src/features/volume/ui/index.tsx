import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import { setVolume, $volume } from "#/features/volume/model/store";
import {createSignal} from "solid-js";
import {MAX_ROTATION} from "#/shared/ui/knob/constants/knob";

const Volume = () => {
  const volume = useUnit($volume);
  
  const onValueChange = (newValue: number) => {
    setVolume(newValue)
  }
  
  return (
    <Knob label="Volume" min={-48} max={0} default={0} value={volume()} onValueChange={onValueChange} />
  );
}

export default Volume;