import { onCleanup, onMount } from "solid-js";
import '../styles/index.scss'

type KnobProps = {
  min: number;
  max: number;
  value: string;
  label: string;
  description?: string;
  rotation: number;
  onMouseDown: (event: MouseEvent) => void
}

const Knob = (props: KnobProps) => {
  let knobElement: HTMLDivElement;
  
  onMount(() => {
    knobElement.addEventListener('mousedown', props.onMouseDown);
  });
  
  onCleanup(() => {
    knobElement.removeEventListener('mousedown', props.onMouseDown);
  });
  
  // Стили для knob
  const knobStyle = () => ({
    transform: `rotate(${props.rotation}deg)`,
    transition: 'transform 0.1s ease-in-out',
  });
  
  return (
    <div class="flex flex-col items-center">
      <div ref={knobElement} class="knob cursor-pointer" style={knobStyle()} />
      <label class="text-xs text-gray-400 mt-2">{ props.label }: { props.value }</label>
    </div>
  )
}

export default Knob;