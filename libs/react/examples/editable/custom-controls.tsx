import { Editable } from "@ark-ui/react/editable";
import { editableStyledSlots as minimal } from "@spark-css/theme-minimal";
import { editableStyledSlots as park } from "@spark-css/theme-park";
import { editableStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const CustomControls = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Editable.Root placeholder="enter a value" defaultValue="Chakra" className={clsx(styledSlots.root)}>
      <Editable.Label className={clsx(styledSlots.label)}>Label</Editable.Label>
      <Editable.Area className={clsx(styledSlots.area)}>
        <Editable.Input className={clsx(styledSlots.input)} />
        <Editable.Preview className={clsx(styledSlots.preview)} />
      </Editable.Area>
      <Editable.Context>
        {(editable) => (
          <Editable.Control className={clsx(styledSlots.control)}>
            {editable.editing ? (
              <>
                <Editable.SubmitTrigger className={clsx(styledSlots.submitTrigger)}>Save</Editable.SubmitTrigger>
                <Editable.CancelTrigger className={clsx(styledSlots.cancelTrigger)}>Cancel</Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger className={clsx(styledSlots.editTrigger)}>Edit</Editable.EditTrigger>
            )}
          </Editable.Control>
        )}
      </Editable.Context>
    </Editable.Root>
  );
};
