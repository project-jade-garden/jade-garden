<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Range from "./range.vue";
import RootProvider from "./root-provider.vue";
import Standalone from "./standalone.vue";
</script>

<template>
  <Story title="DatePicker">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Standalone">
      <Standalone />
    </Variant>
    <Variant title="Range">
      <Range />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
