import { Toggle } from "@ark-ui/react/toggle";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { BoldIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const Disabled = ({ theme }: { theme: Theme }) => {
  return (
    <Toggle.Root disabled>
      <BoldIcon />
    </Toggle.Root>
  );
};
