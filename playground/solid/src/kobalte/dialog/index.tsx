import { Dialog } from "@kobalte/core/dialog";
import { CrossIcon } from "lucide-solid";

export const Basic = () => {
  return (
    <Dialog>
      <Dialog.Trigger class="dialog__trigger">Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" />
        <div class="dialog__positioner">
          <Dialog.Content class="dialog__content">
            <div class="dialog__header">
              <Dialog.Title class="dialog__title">About Kobalte</Dialog.Title>
              <Dialog.CloseButton class="dialog__close-button">
                <CrossIcon />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="dialog__description">
              Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS. It provides a
              set of low-level UI components and primitives which can be the foundation for your design system
              implementation.
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
};
