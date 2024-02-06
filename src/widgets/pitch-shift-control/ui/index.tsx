import SettingsBoard from "#/shared/ui/settings-board";
import PitchShiftPitch from "#/features/pitch-shift/ui/pitch-shift";
import PopupWidget from "#/shared/ui/popup-widget/ui";
import PitchShiftActivationButton from "#/features/pitch-shift/ui/pitch-shift-activation-button";

const PitchShiftControl = () => {
  return (
    <PopupWidget label="Pitch Shift" id="pitch-shift">
      <SettingsBoard label="Pitch Shift" activationButton={<PitchShiftActivationButton />}>
        <PitchShiftPitch />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default PitchShiftControl;