import { Editable } from "@ark-ui/react/editable";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const DoubleClick = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.editableStyles, park: park.editableStyles, shadcn: shadcn.editableStyles },
    theme
  );

  return (
    <Editable.Root placeholder="Placeholder" activationMode="dblclick" className={clsx(styledSlots.root)}>
      <Editable.Area className={clsx(styledSlots.area)}>
        <Editable.Input className={clsx(styledSlots.input)} />
        <Editable.Preview className={clsx(styledSlots.preview)} />
      </Editable.Area>
    </Editable.Root>
  );
};
