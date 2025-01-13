import { Popover, usePopover } from "@ark-ui/react/popover";
import { popoverStyledSlots as minimal } from "@spark-css/theme-minimal";
import { popoverStyledSlots as park } from "@spark-css/theme-park";
import { popoverStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const popover = usePopover({
    positioning: {
      placement: "bottom-start"
    }
  });

  return (
    <>
      <button type="button" onClick={() => popover.setOpen(true)}>
        Popover is {popover.open ? "open" : "closed"}
      </button>
      <Popover.RootProvider value={popover}>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Description>Description</Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.RootProvider>
    </>
  );
};
