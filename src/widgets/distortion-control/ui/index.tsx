import SettingsBoard from "#/shared/ui/settings-board";
import DistortionDistortion from "#/features/distortion/ui/distortion";
import DistortionWet from "#/features/distortion/ui/distortion-wet";
import PopupWidget from "#/shared/ui/popup-widget/ui";
import DistortionActivationButton from "#/features/distortion/ui/distortion-activation-button";

const DistortionControl = () => {
  return (
    <PopupWidget label="Distortion" id="distortion">
      <SettingsBoard label="Distortion" activationButton={<DistortionActivationButton />}>
        <DistortionDistortion />
        <DistortionWet />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default DistortionControl;