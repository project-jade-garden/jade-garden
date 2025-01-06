<script setup lang="ts">
import Arrow from "./arrow.vue";
import Basic from "./basic.vue";
import CloseBehavior from "./close-behavior.vue";
import Controlled from "./controlled.vue";
import Modal from "./modal.vue";
import OnOpenChange from "./on-open-change.vue";
import Portalled from "./portalled.vue";
import Positioning from "./positioning.vue";
import RenderFn from "./render-fn.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Popover">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Portalled">
      <Portalled />
    </Variant>
    <Variant title="OnOpenChange">
      <OnOpenChange />
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
    <Variant title="CloseBehavior">
      <CloseBehavior />
    </Variant>
    <Variant title="Positioning">
      <Positioning />
    </Variant>
    <Variant title="Modal">
      <Modal />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
