import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { dialogStyledSlots as minimal } from "@spark-css/theme-minimal";
import { dialogStyledSlots as park } from "@spark-css/theme-park";
import { dialogStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop className={clsx(styledSlots.backdrop)} />
          <Dialog.Positioner className={clsx(styledSlots.positioner)}>
            <Dialog.Content className={clsx(styledSlots.content)}>
              <Dialog.Title className={clsx(styledSlots.title)}>Dialog Title</Dialog.Title>
              <Dialog.Description className={clsx(styledSlots.description)}>Dialog Description</Dialog.Description>
              <Dialog.CloseTrigger className={clsx(styledSlots.closeTrigger)}>Close</Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
