<script setup lang="ts">
import Basic from "./basic.vue";
import CenterOrigin from "./center-origin.vue";
import DraggingIndicator from "./dragging-indicator.vue";
import InitialValue from "./initial-value.vue";
import MinMax from "./min-max.vue";
import OnEvent from "./on-event.vue";
import RootProvider from "./root-provider.vue";
import Step from "./step.vue";
import Vertical from "./vertical.vue";
import WithMarks from "./with-marks.vue";
</script>

<template>
  <Story title="Slider">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="WithMarks">
      <WithMarks />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="MinMax">
      <MinMax />
    </Variant>
    <Variant title="Step">
      <Step />
    </Variant>
    <Variant title="OnEvent">
      <OnEvent />
    </Variant>
    <Variant title="Vertical">
      <Vertical />
    </Variant>
    <Variant title="CenterOrigin">
      <CenterOrigin />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
    <Variant title="DraggingIndicator">
      <DraggingIndicator />
    </Variant>
  </Story>
</template>
