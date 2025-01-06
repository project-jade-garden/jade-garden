<script setup lang="ts">
import Basic from "./basic.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="QR Code">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
