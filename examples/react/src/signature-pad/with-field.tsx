import { Field } from "@ark-ui/react/field";
import { SignaturePad } from "@ark-ui/react/signature-pad";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.signaturePadStyledSlots,
      park: park.signaturePadStyledSlots,
      shadcn: shadcn.signaturePadStyledSlots
    },
    props.theme
  );
  const [value, setValue] = useState("");

  return (
    <Field.Root {...props}>
      <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl("image/png").then((url) => setValue(url))}>
        <SignaturePad.Label>Label</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
        <SignaturePad.HiddenInput value={value} />
      </SignaturePad.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
