import Key from '#/features/key/ui';
import "../styles/index.scss"
import {generateNotesArray} from "#/shared/utils/generateNotes";

type KeyboardProps = {
  className?: string;
}

const Keyboard = (props: KeyboardProps) => {
  
  const keys = generateNotesArray(3, 3)
  
  return (
    <ul class={`keyboard ${props.className}`}>
      { keys.map(key => <Key {...key} />) }
    </ul>
  );
}

export default Keyboard;