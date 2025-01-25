import { Dialog, useDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.dialog, park: park.dialog, shadcn: shadcn.dialog },
    theme
  );
  const dialog = useDialog();

  return (
    <>
      <button type="button" onClick={() => dialog.setOpen(true)}>
        Open
      </button>

      <Dialog.RootProvider value={dialog}>
        <Dialog.Trigger className={clsx(styledSlots.trigger)}>Open Dialog</Dialog.Trigger>
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
      </Dialog.RootProvider>
    </>
  );
};
