import * as Checkbox from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";

export const Basic = () => (
  <>
    <p>This checkbox is nested inside a label. The state is uncontrolled.</p>

    <h1>Custom label</h1>
    <Label>
      Label{" "}
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Label>

    <br />
    <br />

    <h1>Native label</h1>
    <label htmlFor="">
      Label{" "}
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </label>

    <h1>Native label + native checkbox</h1>
    <label htmlFor="">
      Label <input type="checkbox" />
    </label>

    <h1>Custom label + htmlFor</h1>
    <Label htmlFor="one">Label</Label>
    <Checkbox.Root id="one">
      <Checkbox.Indicator />
    </Checkbox.Root>

    <br />
    <br />

    <h1>Native label + htmlFor</h1>
    <label htmlFor="two">Label</label>
    <Checkbox.Root id="two">
      <Checkbox.Indicator />
    </Checkbox.Root>

    <h1>Native label + native checkbox</h1>
    <label htmlFor="three">Label</label>
    <input type="checkbox" id="three" />
  </>
);
