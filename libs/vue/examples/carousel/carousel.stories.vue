<script setup lang="ts">
import Autoplay from "./autoplay.vue";
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Carousel">
    <Variant title="Autoplay">
      <Autoplay />
    </Variant>
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Customized">
      <Customized />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
