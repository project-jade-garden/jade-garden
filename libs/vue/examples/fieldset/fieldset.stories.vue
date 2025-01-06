<script setup lang="ts">
import Basic from "./basic.vue";
import WithCheckbox from "./with-checkbox.vue";
import WithField from "./with-field.vue";
</script>

<template>
  <Story title="Fieldset">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="WithField">
      <WithField />
    </Variant>
    <Variant title="WithCheckbox">
      <WithCheckbox />
    </Variant>
  </Story>
</template>
