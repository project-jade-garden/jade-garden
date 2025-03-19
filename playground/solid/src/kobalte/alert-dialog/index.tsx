import { AlertDialog } from "@kobalte/core/alert-dialog";
import { CrossIcon } from "lucide-solid";

export const Basic = () => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger class="alert-dialog__trigger">Open</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay class="alert-dialog__overlay" />
        <div class="alert-dialog__positioner">
          <AlertDialog.Content class="alert-dialog__content">
            <div class="alert-dialog__header">
              <AlertDialog.Title class="alert-dialog__title">Alert Dialog</AlertDialog.Title>
              <AlertDialog.CloseButton class="alert-dialog__close-button">
                <CrossIcon />
              </AlertDialog.CloseButton>
            </div>
            <AlertDialog.Description class="alert-dialog__description">
              An Alert Dialog enables assistive technologies and browsers to distinguish alert dialogs from other
              dialogs so they have the option of giving alert dialogs special treatment, such as playing a system alert
              sound.
            </AlertDialog.Description>
          </AlertDialog.Content>
        </div>
      </AlertDialog.Portal>
    </AlertDialog>
  );
};
