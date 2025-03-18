import * as Dialog from "@radix-ui/react-dialog";

export const Basic = () => (
  <Dialog.Root>
    <Dialog.Trigger>open</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Booking info</Dialog.Title>
        <Dialog.Description>Please enter the info for your booking below.</Dialog.Description>
        <Dialog.Close>close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
