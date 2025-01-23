<script setup lang="ts">
import Accordion from "./accordion.vue";
import Basic from "./basic.vue";
import Collapsible from "./collapsible.vue";
import ContextFocusedValue from "./context/focusedValue.vue";
import ContextGetItemState from "./context/getItemState.vue";
import ContextSetValue from "./context/setValue.vue";
import ContextValue from "./context/value.vue";
import Controlled from "./controlled.vue";
import Disabled from "./disabled.vue";
import Horizontal from "./horizontal.vue";
import Multiple from "./multiple.vue";
import RenderProp from "./render-prop.vue";
import RootProvider from "./root-provider.vue";
import Vertical from "./vertical.vue";
</script>

<template>
  <Story title="Accordion">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="RenderProp">
      <RenderProp />
    </Variant>
    <Variant title="Collapsible">
      <Collapsible />
    </Variant>
    <Variant title="Multiple">
      <Multiple />
    </Variant>
    <Variant title="Controlled">
      <Controlled />
    </Variant>
    <Variant title="Vertical">
      <Vertical />
    </Variant>
    <Variant title="Horizontal">
      <Horizontal />
    </Variant>
    <Variant title="Disabled">
      <Disabled />
    </Variant>
    <Variant title="Closed">
      <Accordion multiple :items="['React', 'Solid', 'Vue']" />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
    <Variant title="ContextFocusedValue">
      <ContextFocusedValue />
    </Variant>
    <Variant title="ContextValue">
      <ContextValue />
    </Variant>
    <Variant title="ContextSetValue">
      <ContextSetValue />
    </Variant>
    <Variant title="ContextGetItemState">
      <ContextGetItemState />
    </Variant>
  </Story>
</template>
