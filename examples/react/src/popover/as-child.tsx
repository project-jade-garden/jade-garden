import { Popover } from "@ark-ui/react/popover";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const AsChild = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.popover, park: park.popover, shadcn: shadcn.popover },
    theme
  );

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button type="button">Open</button>
      </Popover.Trigger>
    </Popover.Root>
  );
};
