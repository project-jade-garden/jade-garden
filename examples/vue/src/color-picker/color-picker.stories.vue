<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="ColorPicker">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
