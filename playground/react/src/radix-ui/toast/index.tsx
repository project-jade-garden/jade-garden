import * as Toast from "@radix-ui/react-toast";
import type { ComponentProps } from "react";

const ToastUpgradeAvailable = (props: ComponentProps<typeof Toast.Root>) => (
  <Toast.Root>
    <div>
      <Toast.Title>Upgrade available</Toast.Title>
      <Toast.Close aria-label="Close">
        <span aria-hidden>×</span>
      </Toast.Close>
    </div>
    <Toast.Description>We've just released Radix version 3.0</Toast.Description>
    <Toast.Action altText="Goto account settings to upgrade" style={{ marginTop: 10 }}>
      Upgrade
    </Toast.Action>
  </Toast.Root>
);

export const Basic = () => (
  <Toast.Provider>
    <ToastUpgradeAvailable />
    <Toast.Viewport />
  </Toast.Provider>
);
