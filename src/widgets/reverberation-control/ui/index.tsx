import ReverberationWet from "#/features/reverberation/ui/reverberation-wet";
import ReverberationPreDelay from "#/features/reverberation/ui/reverberation-pre-delay";
import ReverberationDecay from "#/features/reverberation/ui/reverberation-decay";
import SettingsBoard from "#/shared/ui/settings-board";
import PopupWidget from "#/shared/ui/popup-widget/ui";

const ReverberationControl = () => {
  return (
    <PopupWidget label="Reverberation" id="reverberation">
      <SettingsBoard label="Reverberation">
        <ReverberationWet />
        <ReverberationPreDelay />
        <ReverberationDecay />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default ReverberationControl;