import SettingsBoard from "#/shared/ui/settings-board";
import PopupWidget from "#/shared/ui/popup-widget/ui";
import OscillatorType from "#/features/oscillator/ui/oscillator-type";

const OscillatorControl = () => {
  return (
    <PopupWidget label="Oscillator" id="oscillator">
      <SettingsBoard label="Oscillator">
        <OscillatorType />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default OscillatorControl;