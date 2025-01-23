<script setup>
import Basic from "./basic.vue";
import LazyMountAndUnmountOnExit from "./lazy-mount-and-unmount-on-exit.vue";
import LazyMount from "./lazy-mount.vue";
import OnExitComplete from "./on-exit-complete.vue";
import RootProvider from "./root-provider.vue";
import UnMountOnExit from "./unmount-on-exit.vue";
</script>

<template>
  <Story title="Collapsible">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="LazyMount">
      <LazyMount />
    </Variant>
    <Variant title="OnExitComplete">
      <OnExitComplete />
    </Variant>
    <Variant title="UnmountOnExit">
      <UnMountOnExit />
    </Variant>
    <Variant title="LazyMountAndUnmountOnExit">
      <LazyMountAndUnmountOnExit />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
