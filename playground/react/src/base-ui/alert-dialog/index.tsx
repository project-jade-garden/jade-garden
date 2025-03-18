import { AlertDialog } from "@base-ui-components/react/alert-dialog";

export const Basic = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Discard draft</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Title>Discard draft?</AlertDialog.Title>
          <AlertDialog.Description>You can’t undo this action.</AlertDialog.Description>
          <div>
            <AlertDialog.Close>Cancel</AlertDialog.Close>
            <AlertDialog.Close>Discard</AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
