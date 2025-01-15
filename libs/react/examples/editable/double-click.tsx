import { Editable } from "@ark-ui/react/editable";
import { editableStyledSlots as minimal } from "@spark-css/theme-minimal";
import { editableStyledSlots as park } from "@spark-css/theme-park";
import { editableStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const DoubleClick = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Editable.Root placeholder="Placeholder" activationMode="dblclick" className={clsx(styledSlots.root)}>
      <Editable.Area className={clsx(styledSlots.area)}>
        <Editable.Input className={clsx(styledSlots.input)} />
        <Editable.Preview className={clsx(styledSlots.preview)} />
      </Editable.Area>
    </Editable.Root>
  );
};
