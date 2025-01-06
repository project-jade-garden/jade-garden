<script setup lang="ts">
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
import InitialValue from "./initial-value.vue";
import OnEvent from "./on-event.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="RadioGroup">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Disabled">
      <Disabled />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="OnEvent">
      <OnEvent />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
