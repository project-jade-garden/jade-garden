<script setup lang="ts">
import { Checkbox, type CheckboxCheckedState } from "@ark-ui/vue/checkbox";
import { Check } from "lucide-vue-next";
import { ref } from "vue";

const checked = ref<CheckboxCheckedState>(true);
</script>

<template>
  <Checkbox.Root v-model:checked="checked">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
