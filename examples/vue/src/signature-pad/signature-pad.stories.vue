<script setup lang="ts">
import Basic from "./basic.vue";
import ImagePreview from "./image-preview.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="Signature Pad">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Image Preview">
      <ImagePreview />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
