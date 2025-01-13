import { SignaturePad } from "@ark-ui/react/signature-pad";
import { signaturePadStyledSlots as minimal } from "@spark-css/theme-minimal";
import { signaturePadStyledSlots as park } from "@spark-css/theme-park";
import { signaturePadStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <SignaturePad.Root>
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
};
