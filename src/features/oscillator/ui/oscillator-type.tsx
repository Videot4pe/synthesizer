import {useUnit} from "effector-solid";
import {$oscillator, setOscillatorType} from "#/features/oscillator/model/store";
import Select from "#/shared/ui/select/ui";
import {ToneOscillatorType} from "tone";
import {options} from "#/features/oscillator/constants";

const TremoloDepth = () => {
  const filter = useUnit($oscillator);
  
  return (
    <Select
      label="Type"
      value={filter().oscillatorType}
      options={options}
      onValueChange={value => setOscillatorType(value as ToneOscillatorType)}
    />
  );
}

export default TremoloDepth;