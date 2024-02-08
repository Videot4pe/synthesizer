import {For} from "solid-js";

type SelectOption = {
  label: string;
  value: string
}

type SelectProps = {
  label: string;
  value: string;
  options: SelectOption[];
  onValueChange: (newValue: string) => void
}

const Select = (props: SelectProps) => {
  
  return (
    <select
      id={props.label}
      value={props.value}
      onChange={e => props.onValueChange(e.currentTarget.value)}
      class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <For each={props.options}>
        {(option) => (
          <option value={option.value}>{ option.label }</option>
        )}
      </For>
    </select>
  )
}

export default Select;