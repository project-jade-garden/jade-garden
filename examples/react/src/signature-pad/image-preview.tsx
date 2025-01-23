import { SignaturePad } from "@ark-ui/react/signature-pad";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const ImagePreview = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.signaturePadStyledSlots,
      park: park.signaturePadStyledSlots,
      shadcn: shadcn.signaturePadStyledSlots
    },
    theme
  );
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl("image/png").then((url) => setImageUrl(url))}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment fill="orange" />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.Root>

      {imageUrl && <img src={imageUrl} alt="Signature" />}
    </>
  );
};
