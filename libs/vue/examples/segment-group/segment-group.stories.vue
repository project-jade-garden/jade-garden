<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Disabled from "./disabled.vue";
import InitialValue from "./initial-value.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="SegmentGroup">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Disabled">
      <Disabled />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
