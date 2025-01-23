<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Disabled from "./disabled.vue";
import InitialValue from "./initial-value.vue";
import RenderProp from "./render-prop.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="Switch">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Disabled">
      <Disabled />
    </Variant>
    <Variant title="RenderProp">
      <RenderProp />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
