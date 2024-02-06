import {createSignal, mergeProps, onCleanup, onMount} from "solid-js";
import '../styles/index.scss'
import {MAX_ROTATION} from "#/shared/ui/knob/constants/knob";
import {mapValue} from "#/shared/utils/mapValue";

type KnobProps = {
  min: number;
  max: number;
  default: number;
  step?: number;
  value: number;
  label: string;
  onValueChange: (newValue: number) => void
}

const Knob = (props: KnobProps) => {
  const merged = mergeProps({ default: 0 }, props);
  let knobElement: HTMLDivElement;
  const [rotation, setRotation] = createSignal(mapValue(props.value, props.min, props.max, -MAX_ROTATION / 2, MAX_ROTATION / 2));
  
  const onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    const startY = event.pageY;
    const startValue = props.value;
    const rotationStep = MAX_ROTATION / (props.max - props.min);
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.pageY - startY;
      let newValue = startValue - deltaY / rotationStep;
      newValue = Math.max(props.min, Math.min(props.max, newValue)); // Ограничить диапазон от min до max
      
      if (props.step) {
        newValue = Math.round(newValue);
      }
      props.onValueChange(newValue);
      setRotation(mapValue(newValue, props.min, props.max, -MAX_ROTATION / 2, MAX_ROTATION / 2)); // Поворачиваем knob от -135 до 135 градусов
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  
  const onDblClick = () => {
    props.onValueChange(merged.default);
    setRotation(mapValue(merged.default, props.min, props.max, -MAX_ROTATION / 2, MAX_ROTATION / 2))
  }
  
  onMount(() => {
    knobElement.addEventListener('mousedown', onMouseDown);
  });
  
  onCleanup(() => {
    knobElement.removeEventListener('mousedown', onMouseDown);
  });
  
  const knobStyle = () => ({
    transform: `rotate(${rotation()}deg)`,
    transition: 'transform 0.1s ease-in-out',
  });
  
  return (
    <div class="flex flex-col items-center" style="width: 100px">
      <div ref={knobElement!} class="knob cursor-pointer" style={knobStyle()} onDblClick={onDblClick}>
        {/*<div class="indicator"></div>*/}
        {/*<div class="indicator"></div>*/}
        {/*<div class="indicator"></div>*/}
        {/*<div class="indicator"></div>*/}
        {/*<div class="indicator"></div>*/}
      </div>
      <label class="text-xs mt-2">{ props.label }: { Number(props.value).toFixed(2) }</label>
    </div>
  )
}

export default Knob;