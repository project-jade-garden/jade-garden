<script setup lang="ts">
import Basic from "./basic.vue";
import Checkbox from "./checkbox.vue";
import Context from "./context.vue";
import Controlled from "./controlled.vue";
import Group from "./group.vue";
import Nested from "./nested.vue";
import RadioGroup from "./radio-group.vue";
import RenderProp from "./render-prop.vue";
import RootProvider from "./root-provider.vue";
import Separator from "./separator.vue";
</script>

<template>
  <Story title="Menu">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Group">
      <Group />
    </Variant>
    <Variant title="Separator">
      <Separator />
    </Variant>
    <Variant title="Context">
      <Context />
    </Variant>
    <Variant title="RenderProp">
      <RenderProp />
    </Variant>
    <Variant title="Nested">
      <Nested />
    </Variant>
    <Variant title="Checkbox">
      <Checkbox />
    </Variant>
    <Variant title="RadioGroup">
      <RadioGroup />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
