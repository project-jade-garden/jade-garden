import { Toggle } from "@ark-ui/solid/toggle";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { BoldIcon } from "lucide-solid";
import { type Theme, getTheme } from "../utils";

export const Disabled = ({ theme }: { theme: Theme }) => {
  return (
    <Toggle.Root disabled>
      <BoldIcon />
    </Toggle.Root>
  );
};
