<script setup lang="ts">
import Advanced from "./advanced.vue";
import Basic from "./basic.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="Combobox">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Advanced">
      <Advanced />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
