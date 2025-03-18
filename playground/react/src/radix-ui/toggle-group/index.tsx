import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as React from "react";

export const Basic = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <>
      <h1>Uncontrolled</h1>
      <ToggleGroup.Root type="single" aria-label="Options" defaultValue="1">
        <ToggleGroup.Item value="1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="2">Option 2</ToggleGroup.Item>
        <ToggleGroup.Item value="3">Option 3</ToggleGroup.Item>
      </ToggleGroup.Root>

      <h1>Controlled</h1>
      <ToggleGroup.Root type="single" aria-label="Options" value={value} onValueChange={setValue}>
        <ToggleGroup.Item value="1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="2">Option 2</ToggleGroup.Item>
        <ToggleGroup.Item value="3">Option 3</ToggleGroup.Item>
      </ToggleGroup.Root>
    </>
  );
};
