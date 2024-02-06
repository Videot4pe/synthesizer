import SettingsBoard from "#/shared/ui/settings-board";
import TremoloFrequency from "#/features/tremolo/ui/tremolo-frequency";
import TremoloDepth from "#/features/tremolo/ui/tremolo-depth";
import PopupWidget from "#/shared/ui/popup-widget/ui";
import TremoloActivationButton from "#/features/tremolo/ui/tremolo-activation-button";

const TremoloControl = () => {
  return (
    <PopupWidget label="Tremolo" id="tremolo">
      <SettingsBoard label="Tremolo" activationButton={<TremoloActivationButton />}>
        <TremoloFrequency />
        <TremoloDepth />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default TremoloControl;