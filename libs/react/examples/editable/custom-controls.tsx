import { Editable } from "@ark-ui/react/editable";
import { editableStyledSlots as minimal } from "@spark-css/theme-minimal";
import { editableStyledSlots as park } from "@spark-css/theme-park";
import { editableStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const CustomControls = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Editable.Root placeholder="enter a value" defaultValue="Chakra">
      <Editable.Label>Label</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Context>
        {(editable) => (
          <Editable.Control>
            {editable.editing ? (
              <>
                <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
                <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger>Edit</Editable.EditTrigger>
            )}
          </Editable.Control>
        )}
      </Editable.Context>
    </Editable.Root>
  );
};
