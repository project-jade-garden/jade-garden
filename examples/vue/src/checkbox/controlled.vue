<script setup lang="ts">
import { Checkbox, type CheckboxCheckedState } from "@ark-ui/vue/checkbox";
import { ref } from "vue";
import { default as CheckIcon } from "../icons/check.vue";

const checked = ref<CheckboxCheckedState>(true);
</script>

<template>
  <Checkbox.Root v-model:checked="checked">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
