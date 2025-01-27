import { QrCode } from "@ark-ui/react/qr-code";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.qrCodeStyles, park: park.qrCodeStyles, shadcn: shadcn.qrCodeStyles },
    theme
  );

  return (
    <QrCode.Root defaultValue="http://ark-ui.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
        Download
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  );
};
