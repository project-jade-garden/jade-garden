import { Toggle } from "@ark-ui/react/toggle";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { Volume, VolumeOff } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const Indicator = ({ theme }: { theme: Theme }) => {
  return (
    <Toggle.Root>
      <Toggle.Indicator fallback={<Volume />}>
        <VolumeOff />
      </Toggle.Indicator>
    </Toggle.Root>
  );
};
