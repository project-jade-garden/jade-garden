import { ToggleButton } from "@kobalte/core/toggle-button";
import { Volume, VolumeOff } from "lucide-solid";
import { Show } from "solid-js";

export const Basic = () => {
  return (
    <ToggleButton class="toggle-button" aria-label="Mute">
      {(state) => (
        <Show when={state.pressed()} fallback={<Volume />}>
          <VolumeOff />
        </Show>
      )}
    </ToggleButton>
  );
};
