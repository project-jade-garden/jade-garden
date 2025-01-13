import { Dialog as ArkDialog, Popover, Portal } from "@ark-ui/react";
import { popoverStyledSlots as minimal } from "@spark-css/theme-minimal";
import { popoverStyledSlots as park } from "@spark-css/theme-park";
import { popoverStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const WithDialog = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Popover.Root>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      {/* portal the popover content. No need for portals in dialogs */}
      <Portal>
        <Popover.Positioner>
          <Popover.Content style={{ backgroundColor: "pink", width: "300px", height: "300px" }}>
            <AppDialogs theme={theme} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

interface DialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  bg: string;
  theme: Theme;
}

const Dialog = (props: DialogProps) => {
  const { children, isOpen, setIsOpen, bg } = props;
  const styledSlots = getTheme({ minimal, park, shadcn }, props.theme);

  return (
    <>
      <ArkDialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <ArkDialog.Backdrop />
        <ArkDialog.Positioner style={{ position: "fixed", left: "0px", top: "0px" }}>
          <ArkDialog.Content style={{ backgroundColor: bg, width: "300px", height: "200px" }}>
            <ArkDialog.CloseTrigger asChild>
              <button type="button">Close</button>
            </ArkDialog.CloseTrigger>
            {children}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </ArkDialog.Root>
    </>
  );
};

const AppDialogs = ({ theme }: { theme: Theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChildOpen, setIsChildOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Parent Dialog
      </button>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} bg="green" theme={theme}>
        This is parent
        <button type="button" onClick={() => setIsChildOpen(true)}>
          Open Child Dialog
        </button>
        <Dialog isOpen={isChildOpen} setIsOpen={setIsChildOpen} bg="red" theme={theme}>
          This is child
        </Dialog>
      </Dialog>
    </>
  );
};
