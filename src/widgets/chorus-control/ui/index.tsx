import ChorusFrequency from "#/features/chorus/ui/chorus-frequency";
import ChorusDelayTime from "#/features/chorus/ui/chorus-delay-time";
import ChorusDepth from "#/features/chorus/ui/chorus-depth";
import SettingsBoard from "#/shared/ui/settings-board";
import PopupWidget from "#/shared/ui/popup-widget/ui";
import ChorusActivationButton from "#/features/chorus/ui/chorus-activation-button";

const ChorusControl = () => {
  return (
    <PopupWidget label="Chorus" id="chorus">
      <SettingsBoard label="Chorus" activationButton={<ChorusActivationButton />}>
        <ChorusFrequency />
        <ChorusDelayTime />
        <ChorusDepth />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default ChorusControl;