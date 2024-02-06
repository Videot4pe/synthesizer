import {JSX} from "solid-js";

type CollapsableCardProps = {
  label: string;
  children: any;
  activationButton?: JSX.Element
}

const SettingsBoard = (props: CollapsableCardProps) => {
  return (
    <div class="p-4 m-1">
      <div class="flex justify-between gap-4">
        <div class="control-board__title text-xl cursor-pointer">{ props.label }</div>
        { props.activationButton }
      </div>
      <hr class="my-4" />
      <div class="flex justify-center space-x-4">
        { props.children }
      </div>
    </div>
  );
}

export default SettingsBoard;