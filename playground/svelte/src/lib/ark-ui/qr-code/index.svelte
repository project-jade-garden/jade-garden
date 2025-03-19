<script lang="ts">
import { QrCode } from "@ark-ui/svelte/qr-code";
</script>

<QrCode.Root id="qr-code-root" defaultValue="http://ark-ui.com">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
  <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">Download</QrCode.DownloadTrigger>
</QrCode.Root>
