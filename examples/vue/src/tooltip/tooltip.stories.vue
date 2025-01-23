<script setup lang="ts">
import Arrow from "./arrow.vue";
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Positioning from "./positioning.vue";
import RenderFn from "./render-fn.vue";
import RootProvider from "./root-provider.vue";
import Timings from "./timings.vue";
</script>

<template>
  <Story title="Tooltip">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="RenderFn">
      <RenderFn />
    </Variant>
    <Variant title="Arrow">
      <Arrow />
    </Variant>
    <Variant title="Timings">
      <Timings />
    </Variant>
    <Variant title="Positioning">
      <Positioning />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
