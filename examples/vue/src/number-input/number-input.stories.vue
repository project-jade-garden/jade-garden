<script setup lang="ts">
import Basic from "./basic.vue";
import FormUsage from "./form-usage.vue";
import Formatted from "./formatted.vue";
import FractionDigits from "./fraction-digits.vue";
import MinMax from "./min-max.vue";
import MouseWheel from "./mouse-wheel.vue";
import NoClamp from "./no-clamp.vue";
import RenderFn from "./render-fn.vue";
import RootProvider from "./root-provider.vue";
import Scrubber from "./scrubber.vue";
</script>

<template>
  <Story title="NumberInput">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="MinMax">
      <MinMax />
    </Variant>
    <Variant title="FractionDigits">
      <FractionDigits />
    </Variant>
    <Variant title="Scrubber">
      <Scrubber />
    </Variant>
    <Variant title="MouseWheel">
      <MouseWheel />
    </Variant>
    <Variant title="NoClamp">
      <NoClamp />
    </Variant>
    <Variant title="FormUsage">
      <FormUsage />
    </Variant>
    <Variant title="Formatted">
      <Formatted />
    </Variant>
    <Variant title="RenderFn">
      <RenderFn />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
