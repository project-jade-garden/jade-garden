import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.hoverCard, park: park.hoverCard, shadcn: shadcn.hoverCard }, theme);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(!isOpen)}>
        click me
      </button>
      <HoverCard.Root open={isOpen} onOpenChange={() => setOpen(false)}>
        <HoverCard.Trigger className={clsx(styledSlots.trigger)}>Hover me</HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner className={clsx(styledSlots.positioner)}>
            <HoverCard.Content className={clsx(styledSlots.content)}>
              <HoverCard.Arrow className={clsx(styledSlots.arrow)}>
                <HoverCard.ArrowTip className={clsx(styledSlots.arrowTip)} />
              </HoverCard.Arrow>
              Content
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </>
  );
};
