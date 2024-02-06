import "../styles/index.scss"
import {Note} from "#/shared/model/note";
import {createEffect, createSignal} from "solid-js";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

type KeyProps = Note;

const Key = (props: KeyProps) => {
  
  const [keyIsPressed, setKeyIsPressed] = createSignal<number | undefined>();
  
  const onStart = () => {
    synthesizerEngine.triggerAttack(props.frequency)
  }
  const onEnd = () => {
    synthesizerEngine.triggerRelease(props.frequency)
  }
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.repeat || keyIsPressed() === props.frequency) return
    
    const key = event.code;
    if (key === props.key) {
      setKeyIsPressed(props.frequency)
      onStart()
    }
  };
  
  const handleKeyUp = (event: KeyboardEvent) => {
    const key = event.code;
    if (key === props.key) {
      setKeyIsPressed(undefined)
      onEnd()
    }
  };
  
  // TODO -> mode to keyboard or common effector
  createEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });
  
  return (
    <li
      classList={{
        'key': true,
        [props.type]: true,
        [props.name.slice(0, 1).toLowerCase()]: !props.name.includes('#')
      }}
      onMouseDown={onStart}
      onMouseUp={onEnd}
    />
  );
}

export default Key;