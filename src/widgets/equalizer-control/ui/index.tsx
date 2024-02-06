import LowGain from "#/features/equalizer/ui/low-gain";
import MidGain from "#/features/equalizer/ui/mid-gain";
import HighGain from "#/features/equalizer/ui/high-gain";
import SettingsBoard from "#/shared/ui/settings-board";
import PopupWidget from "#/shared/ui/popup-widget/ui";

const EqualizerControl = () => {
  return (
    <PopupWidget label="Equalizer" id="equalizer">
      <SettingsBoard label="Equalizer">
        <LowGain />
        <MidGain />
        <HighGain />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default EqualizerControl;