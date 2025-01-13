import { Field } from "@ark-ui/react/field";
import { SignaturePad } from "@ark-ui/react/signature-pad";
import { signaturePadStyledSlots as minimal } from "@spark-css/theme-minimal";
import { signaturePadStyledSlots as park } from "@spark-css/theme-park";
import { signaturePadStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, props.theme);
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
