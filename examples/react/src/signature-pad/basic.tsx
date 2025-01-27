import { SignaturePad } from "@ark-ui/react/signature-pad";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.signaturePadStyles,
      park: park.signaturePadStyles,
      shadcn: shadcn.signaturePadStyles
    },
    theme
  );

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
