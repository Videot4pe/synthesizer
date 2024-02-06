import Key from '#/features/key/ui';
import "../styles/index.scss"
import {generateNotesArray} from "#/shared/utils/generateNotes";
import {For} from "solid-js";

type KeyboardProps = {
  className?: string;
}

const Keyboard = (props: KeyboardProps) => {
  
  const keys = generateNotesArray(3, 3)
  
  return (
    <ul class={`keyboard ${props.className}`}>
      <For each={keys}>
        {(key) => <Key {...key} />}
      </For>
    </ul>
  );
}

export default Keyboard;