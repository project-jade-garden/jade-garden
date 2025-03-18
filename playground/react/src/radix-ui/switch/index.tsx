import { Label } from "@radix-ui/react-label";
import * as Switch from "@radix-ui/react-switch";

export const Basic = () => (
  <>
    <p>This switch is nested inside a label. The state is uncontrolled.</p>
    <Label>
      This is the label{" "}
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>
    </Label>
  </>
);
