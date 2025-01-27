import { Editable } from "@ark-ui/react/editable";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.editableStyles, park: park.editableStyles, shadcn: shadcn.editableStyles },
    theme
  );

  return (
    <Editable.Root placeholder="Placeholder" className={clsx(styledSlots.root)}>
      <Editable.Label className={clsx(styledSlots.label)}>Label</Editable.Label>
      <Editable.Area className={clsx(styledSlots.area)}>
        <Editable.Input className={clsx(styledSlots.input)} />
        <Editable.Preview className={clsx(styledSlots.preview)} />
      </Editable.Area>
    </Editable.Root>
  );
};
