import {useUnit} from "effector-solid";
import {
  $audioEffects, setDecayTime,
  setDelayTime,
  setDryLevel,
  setReverbLevel,
  setWetLevel
} from "#/features/reverberation/model/store";
import {createSignal} from "solid-js";
import Knob from "#/shared/ui/knob/ui";
import {MAX_ROTATION} from "#/shared/constants/knob";
import {ReverberationProps} from "#/features/reverberation/model/model";

const Reverberation = (props: ReverberationProps) => {
  const audioEffects = useUnit($audioEffects);
  const currentValue = () => audioEffects()[props.effectKey].toFixed(2);
  const [rotation, setRotation] = createSignal((audioEffects()[props.effectKey] * MAX_ROTATION) - (MAX_ROTATION / 2));
  
  const onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    const startY = event.pageY;
    const startValue = audioEffects()[props.effectKey];
    const rotationStep = MAX_ROTATION / props.max;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.pageY - startY;
      let newValue = startValue - deltaY / rotationStep;
      newValue = Math.max(props.min, Math.min(props.max, newValue)); // Ограничить диапазон от 0 до 1
      
      switch (props.effectKey) {
        case 'reverbLevel':
          setReverbLevel(newValue);
          break;
        case 'dryLevel':
          setDryLevel(newValue);
          break;
        case 'wetLevel':
          setWetLevel(newValue);
          break;
        case 'delayTime':
          setDelayTime(newValue);
          break;
        case 'decayTime':
          setDecayTime(newValue);
          break;
        default:
          break;
      }
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
    <div>
      { currentValue() }
      <Knob
        min={props.min}
        max={props.max}
        value={currentValue()}
        label={props.label}
        rotation={rotation()}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

export default Reverberation;