import SettingsBoard from "#/shared/ui/settings-board";
import CrusherBits from "#/features/crusher/ui/crusher";
import PopupWidget from "#/shared/ui/popup-widget/ui";
import CrusherActivationButton from "#/features/crusher/ui/crusher-activation-button";

const CrusherControl = () => {
  return (
    <PopupWidget label="Crusher" id="crusher">
      <SettingsBoard label="Crusher" activationButton={<CrusherActivationButton />}>
        <CrusherBits />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default CrusherControl;