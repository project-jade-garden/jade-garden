import { SignaturePad } from "@ark-ui/react/signature-pad";
import { signaturePadStyledSlots as minimal } from "@spark-css/theme-minimal";
import { signaturePadStyledSlots as park } from "@spark-css/theme-park";
import { signaturePadStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const ImagePreview = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
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
