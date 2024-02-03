import Knob from "#/shared/ui/knob/ui";
import {useUnit} from "effector-solid";
import {createSignal} from "solid-js";
import {MAX_ROTATION} from "#/shared/constants/knob";
import {$midFilter, setMidFilter} from "#/features/equalizer/model/mid";

const MAX_FREQUENCY = 1000

const MidFrequency = () => {
  const filter = useUnit($midFilter);
  const currentValue = () => filter().frequency?.toFixed(2) || '0'
  const [rotation, setRotation] = createSignal(((filter().frequency || 0) * MAX_ROTATION) - (MAX_ROTATION / 2));
  
  const onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    const startY = event.pageY;
    const startValue = filter().frequency || 0;
    const rotationStep = MAX_ROTATION / MAX_FREQUENCY;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.pageY - startY;
      let newValue = startValue - deltaY / rotationStep;
      newValue = Math.max(0, Math.min(MAX_FREQUENCY, newValue));
      
      setMidFilter({ ...filter(), frequency: newValue });
      setRotation((newValue * MAX_ROTATION) - (MAX_ROTATION / 2));
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  
  return (
    <Knob label="Mid Frequency" min={0} max={1000} value={currentValue()} onMouseDown={onMouseDown} rotation={rotation()} />
  );
}

export default MidFrequency;