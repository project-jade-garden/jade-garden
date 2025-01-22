// @ts-expect-error - Required for examples
import { Button } from "@acme/ui-lib";
import { Popover } from "@ark-ui/react/popover";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const AsChild = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.popoverStyledSlots, park: park.popoverStyledSlots, shadcn: shadcn.popoverStyledSlots },
    theme
  );

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open</Button>
      </Popover.Trigger>
    </Popover.Root>
  );
};
