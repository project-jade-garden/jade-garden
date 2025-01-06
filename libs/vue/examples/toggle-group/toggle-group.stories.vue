<script setup lang="ts">
import Basic from "./basic.vue";
import InitialValue from "./initial-value.vue";
import Multiple from "./multiple.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="ToggleGroup">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="Multiple">
      <Multiple />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
