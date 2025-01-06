<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Group from "./group.vue";
import Indeterminate from "./indeterminate.vue";
import RenderProp from "./render-prop.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="Checkbox">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Indeterminate">
      <Indeterminate />
    </Variant>
    <Variant title="RenderProp">
      <RenderProp />
    </Variant>
    <Variant title="Group">
      <Group />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
