import { SignaturePad, useSignaturePad } from "@ark-ui/react/signature-pad";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.signaturePadStyledSlots,
      park: park.signaturePadStyledSlots,
      shadcn: shadcn.signaturePadStyledSlots
    },
    theme
  );
  const signaturePad = useSignaturePad();

  return (
    <>
      <button type="button" onClick={() => signaturePad.clear()}>
        Clear
      </button>

      <SignaturePad.RootProvider value={signaturePad}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.RootProvider>
    </>
  );
};
