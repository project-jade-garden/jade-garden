<script setup lang="ts">
import Basic from "./basic.vue";
import Countdown from "./countdown.vue";
import Events from "./events.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Timer">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Countdown">
      <Countdown />
    </Variant>
    <Variant title="Events">
      <Events />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
