import SettingsBoard from "#/shared/ui/settings-board";
import EnvelopeAttack from "#/features/envelope/ui/envelope-attack";
import EnvelopeDecay from "#/features/envelope/ui/envelope-decay";
import EnvelopeSustain from "#/features/envelope/ui/envelope-sustain";
import EnvelopeRelease from "#/features/envelope/ui/envelope-release";
import PopupWidget from "#/shared/ui/popup-widget/ui";

const EnvelopeControl = () => {
  return (
    <PopupWidget label="Envelope" id="envelope">
      <SettingsBoard label="Envelope">
        <EnvelopeAttack />
        <EnvelopeDecay />
        <EnvelopeSustain />
        <EnvelopeRelease />
      </SettingsBoard>
    </PopupWidget>
  );
}

export default EnvelopeControl;