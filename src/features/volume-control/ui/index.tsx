import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import { setVolume, $volume } from "#/features/volume-control/model/store";
import {createSignal} from "solid-js";
import {MAX_ROTATION} from "#/shared/constants/knob";

const VolumeControl = () => {
  const volume = useUnit($volume);
  const currentVolume = () => volume().toFixed(2)
  const [rotation, setRotation] = createSignal((volume() * MAX_ROTATION) - (MAX_ROTATION / 2));
  
  const onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    const startY = event.pageY;
    const startVolume = volume();
    const rotationStep = MAX_ROTATION / 48;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.pageY - startY;
      let newVolume = startVolume - deltaY / rotationStep;
      newVolume = Math.max(-48, Math.min(0, newVolume)); // Ограничить диапазон от 0 до 1
      
      setVolume(newVolume);
      setRotation((newVolume * MAX_ROTATION) - (MAX_ROTATION / 2)); // Поворачиваем knob от -135 до 135 градусов
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  
  return (
    <Knob label="Volume" min={-48} max={0} value={currentVolume()} onMouseDown={onMouseDown} rotation={rotation()} />
  );
}

export default VolumeControl;