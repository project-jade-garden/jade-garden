<script setup lang="ts">
import Basic from "./basic.vue";
import Customized from "./customized.vue";
import RootProvider from "./root-provider.vue";
</script>

<template>
  <Story title="Pagination">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Customized">
      <Customized />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
