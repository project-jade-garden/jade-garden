import { QrCode } from "@ark-ui/react/qr-code";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithOverlay = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.qrCode, park: park.qrCode, shadcn: shadcn.qrCode },
    theme
  );

  return (
    <QrCode.Root defaultValue="http://ark-ui.com" encoding={{ ecc: "H" }}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.Overlay>
        <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
      </QrCode.Overlay>
    </QrCode.Root>
  );
};
