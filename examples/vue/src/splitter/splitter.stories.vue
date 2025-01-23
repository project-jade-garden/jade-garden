<script setup lang="ts">
import Basic from "./basic.vue";
import Events from "./events.vue";
import RenderProp from "./render-prop.vue";
import RootProvider from "./root-provider.vue";
import Vertical from "./vertical.vue";
</script>

<template>
  <Story title="Splitter">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="RenderProp">
      <RenderProp />
    </Variant>
    <Variant title="Events">
      <Events />
    </Variant>
    <Variant title="Vertical">
      <Vertical />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
