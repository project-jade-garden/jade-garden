import { Dialog } from "@base-ui-components/react/dialog";

export const Basic = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>View notifications</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Notifications</Dialog.Title>
          <Dialog.Description>You are all caught up. Good job!</Dialog.Description>
          <div>
            <Dialog.Close>Close</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
