import Reverberation from "#/features/reverberation/ui";
import {ReverberationSettings} from "#/features/reverberation/model/model";
import {
  MAX_DECAY_TIME,
  MAX_DELAY_TIME,
  MAX_DRY_LEVEL,
  MAX_REVERB_LEVEL, MAX_WET_LEVEL, MIN_DECAY_TIME, MIN_DELAY_TIME,
  MIN_DRY_LEVEL,
  MIN_REVERB_LEVEL,
  MIN_WET_LEVEL
} from "#/shared/constants/reverberation";

const ReverberationBoard = () => {
  return (
    <div class="flex space-x-4 border-1">
      <Reverberation
        label="Reverb Level"
        min={MIN_REVERB_LEVEL}
        max={MAX_REVERB_LEVEL}
        effectKey={ReverberationSettings.reverbLevel}
      />
      <Reverberation
        label="Dry Level"
        min={MIN_DRY_LEVEL}
        max={MAX_DRY_LEVEL}
        effectKey={ReverberationSettings.dryLevel}
      />
      <Reverberation
        label="Wet Level"
        min={MIN_WET_LEVEL}
        max={MAX_WET_LEVEL}
        effectKey={ReverberationSettings.wetLevel}
      />
      <Reverberation
        label="Delay Time"
        min={MIN_DELAY_TIME}
        max={MAX_DELAY_TIME}
        effectKey={ReverberationSettings.delayTime}
      />
      <Reverberation
        label="Decay Time"
        min={MIN_DECAY_TIME}
        max={MAX_DECAY_TIME}
        effectKey={ReverberationSettings.decayTime}
      />
    </div>
  );
}

export default ReverberationBoard;