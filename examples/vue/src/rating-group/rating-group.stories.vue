<script setup lang="ts">
import Basic from "./basic.vue";
import Controlled from "./controlled.vue";
import Disabled from "./disabled.vue";
import FormUsage from "./form-usage.vue";
import HalfRatings from "./half-ratings.vue";
import InitialValue from "./initial-value.vue";
import ReadOnly from "./read-only.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="RatingGroup">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="HalfRatings">
      <HalfRatings />
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
    <Variant title="ReadOnly">
      <ReadOnly />
    </Variant>
    <Variant title="FormUsage">
      <FormUsage />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
