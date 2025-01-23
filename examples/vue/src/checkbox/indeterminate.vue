<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { Check, Minus } from "lucide-vue-next";
</script>

<template>
  <Checkbox.Root checked="indeterminate">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
      <Checkbox.Indicator indeterminate>
        <Minus />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
