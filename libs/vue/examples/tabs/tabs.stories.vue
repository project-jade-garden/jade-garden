<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import DisabledTab from "./disabled-tab.vue";
import Indicator from "./indicator.vue";
import InitialTab from "./initial-tab.vue";
import LazyMount from "./lazy-mount.vue";
import Manual from "./manual.vue";
import RootProvider from "./root-provider.vue";
import Vertical from "./vertical.vue";
</script>

<template>
  <Story title="Tabs">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="InitialTab">
      <InitialTab />
    </Variant>
    <Variant title="Indicator">
      <Indicator />
    </Variant>
    <Variant title="LazyMount">
      <LazyMount />
    </Variant>
    <Variant title="DisabledTab">
      <DisabledTab />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Vertical">
      <Vertical />
    </Variant>
    <Variant title="Manual">
      <Manual />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
