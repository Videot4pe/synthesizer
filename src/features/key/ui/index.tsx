import "../styles/index.scss"
import {Note} from "#/shared/model/note";
import {createEffect} from "solid-js";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

type KeyProps = Note;

const Key = (props: KeyProps) => {
  
  const onStart = () => {
    // audioController.setFrequency(props.frequency)
    // audioController.play()
    synthesizerEngine.triggerAttackRelease(props.frequency, '8n')
  }
  const onEnd = () => {
    // audioController.stop()
  }
  
  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.code;
    console.log(event)
    if (key === props.key) {
      onStart()
    }
  };
  
  const handleKeyUp = (event: KeyboardEvent) => {
    const key = event.code;
    if (key === props.key) {
      onEnd()
    }
  };
  
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