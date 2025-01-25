import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.dialog, park: park.dialog, shadcn: shadcn.dialog },
    theme
  );
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
