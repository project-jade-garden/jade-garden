<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { default as CheckIcon } from "../icons/check.vue";
import { default as MinusIcon } from "../icons/minus.vue";
</script>

<template>
  <Checkbox.Root checked="indeterminate">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
      <Checkbox.Indicator indeterminate>
        <MinusIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
