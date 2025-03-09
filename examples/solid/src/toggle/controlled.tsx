import { Toggle } from "@ark-ui/solid/toggle";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { Volume, VolumeOff } from "lucide-solid";
import { Show, createSignal } from "solid-js";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const [pressed, setPressed] = createSignal(false);
  return (
    <div>
      <Toggle.Root pressed={pressed()} onPressedChange={setPressed}>
        <Show when={pressed()} fallback={<VolumeOff />}>
          <Volume />
        </Show>
      </Toggle.Root>
      <p>Volume is {pressed() ? "unmuted" : "muted"}</p>
    </div>
  );
};
