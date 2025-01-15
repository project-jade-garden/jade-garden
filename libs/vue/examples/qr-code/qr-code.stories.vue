<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import ErrorCorrection from "./error-correction.vue";
import RootProvider from "./root-provider.vue";
import WithOverlay from "./with-overlay.vue";
</script>

<template>
  <Story title="QR Code">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
    <Variant title="WithOverlay">
      <WithOverlay />
    </Variant>
    <Variant title="ErrorCorrection">
      <ErrorCorrection />
    </Variant>
  </Story>
</template>
