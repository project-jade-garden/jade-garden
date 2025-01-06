<script setup lang="ts">
import Basic from "./basic.vue";
import RenderFn from "./render-fn.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Clipboard">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="RenderFn">
      <RenderFn />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
