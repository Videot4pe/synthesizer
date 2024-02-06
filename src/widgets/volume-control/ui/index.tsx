import SettingsBoard from "#/shared/ui/settings-board";
import Volume from "#/features/volume/ui";
import PopupWidget from "#/shared/ui/popup-widget/ui";

const VolumeControl = () => {
  return (
    <PopupWidget label="Volume" id="volume">
      <SettingsBoard label="Volume">
        <Volume />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default VolumeControl;