<script setup lang="ts">
import Basic from "./basic.vue";
import BlurBehavior from "./blur-behavior.vue";
import DisabledEditing from "./disabled-editing.vue";
import InitialValue from "./initial-value.vue";
import MaxWithOverflow from "./max-with-overflow.vue";
import OnEvent from "./on-event.vue";
import PasteBehavior from "./paste-behavior.vue";
import RootProvider from "./root-provider.vue";
import Validated from "./validated.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="TagsInput">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="MaxWithOverflow">
      <MaxWithOverflow />
    </Variant>
    <Variant title="Validated">
      <Validated />
    </Variant>
    <Variant title="BlurBehavior">
      <BlurBehavior />
    </Variant>
    <Variant title="PasteBehavior">
      <PasteBehavior />
    </Variant>
    <Variant title="DisabledEditing">
      <DisabledEditing />
    </Variant>
    <Variant title="OnEvent">
      <OnEvent />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
