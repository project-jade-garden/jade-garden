<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import LazyMount from "./lazy-mount.vue";
import RenderFn from "./render-fn.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Dialog">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="LazyMount">
      <LazyMount />
    </Variant>
    <Variant title="RenderFn">
      <RenderFn />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
