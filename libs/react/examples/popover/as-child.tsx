// @ts-expect-error - Required for examples
import { Button } from "@acme/ui-lib";
import { Popover } from "@ark-ui/react/popover";
import { popoverStyledSlots as minimal } from "@spark-css/theme-minimal";
import { popoverStyledSlots as park } from "@spark-css/theme-park";
import { popoverStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const AsChild = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open</Button>
      </Popover.Trigger>
    </Popover.Root>
  );
};
