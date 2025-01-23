<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Positioning from "./positioning.vue";
import RenderProp from "./render-prop.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="HoverCard">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Positioning">
      <Positioning />
    </Variant>
    <Variant title="RenderProp">
      <RenderProp />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
