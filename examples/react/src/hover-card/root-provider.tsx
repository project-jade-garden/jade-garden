import { HoverCard, useHoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.hoverCardStyles, park: park.hoverCardStyles, shadcn: shadcn.hoverCardStyles },
    theme
  );
  const hoverCard = useHoverCard();

  return (
    <>
      <button type="button" onClick={() => hoverCard.setOpen(true)}>
        Open
      </button>

      <HoverCard.RootProvider value={hoverCard}>
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
      </HoverCard.RootProvider>
    </>
  );
};
