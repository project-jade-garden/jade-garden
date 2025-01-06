<script setup lang="ts">
import InputControlled from "./input-controlled.vue";
import Input from "./input.vue";
import RequiredIndicator from "./required-indicator.vue";
import SelectControlled from "./select-controlled.vue";
import Select from "./select.vue";
import TextareaControlled from "./textarea-controlled.vue";
import Textarea from "./textarea.vue";
</script>

<template>
  <Story title="Field">
    <Variant title="Input">
      <Input />
    </Variant>
    <Variant title="Input Controlled">
      <InputControlled />
    </Variant>
    <Variant title="Select">
      <Select />
    </Variant>
    <Variant title="Select Controlled">
      <SelectControlled />
    </Variant>
    <Variant title="Textarea">
      <Textarea />
    </Variant>
    <Variant title="Textarea Controlled">
      <TextareaControlled />
    </Variant>
    <Variant title="Required Indicator">
      <RequiredIndicator />
    </Variant>
  </Story>
</template>
