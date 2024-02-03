import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {createSignal} from "solid-js";
import {MAX_ROTATION} from "#/shared/constants/knob";
import {$midFilter, setMidFilter} from "#/features/equalizer/model/mid";

const MidGain = () => {
  const filter = useUnit($midFilter);
  const currentValue = () => filter().gain?.toFixed(2) || '0'
  const [rotation, setRotation] = createSignal(((filter().gain || 0) * MAX_ROTATION) - (MAX_ROTATION / 2));
  
  const onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    const startY = event.pageY;
    const startValue = filter().gain || 0;
    const rotationStep = MAX_ROTATION / 1;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.pageY - startY;
      let newValue = startValue - deltaY / rotationStep;
      newValue = Math.max(0, Math.min(1, newValue)); // Ограничить диапазон от 0 до 1
      
      setMidFilter({ ...filter(), gain: newValue });
      setRotation((newValue * MAX_ROTATION) - (MAX_ROTATION / 2)); // Поворачиваем knob от -135 до 135 градусов
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  
  return (
    <Knob label="Mid Gain" min={0} max={1} value={currentValue()} onMouseDown={onMouseDown} rotation={rotation()} />
  );
}

export default MidGain;