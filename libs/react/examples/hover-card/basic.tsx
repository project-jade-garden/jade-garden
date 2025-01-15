import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { hoverCardStyledSlots as minimal } from "@spark-css/theme-minimal";
import { hoverCardStyledSlots as park } from "@spark-css/theme-park";
import { hoverCardStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <HoverCard.Root>
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
  );
};
