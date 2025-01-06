<script setup lang="ts">
import Basic from "./basic.vue";
import CustomControls from "./custom-controls.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Editable">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="CustomControls">
      <CustomControls />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
