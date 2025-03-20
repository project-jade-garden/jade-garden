<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "reka-ui";
import { ref } from "vue";

const fruit = ref("");

const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
const vegetables = ["Aubergine", "Broccoli", "Carrot", "Courgette", "Leek"];

const POSITION = ["item-aligned", "popper"] as const;
</script>

<template>
  <SelectRoot
    v-for="position in POSITION"
    :key="position"
    v-model="fruit"
    aria-label="Fruits"
  >
    <SelectTrigger aria-label="Customise options">
      <SelectValue placeholder="Please select a fruit">
        {{ fruit }}
      </SelectValue>
      <Icon icon="radix-icons:chevron-down" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent :side-offset="5" :position="position">
        <SelectScrollUpButton>
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport>
          <SelectLabel> Fruits </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              :value="option"
            >
              <SelectItemIndicator>
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectLabel> Vegetables </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in vegetables"
              :key="index"
              :value="option"
              :disabled="option === 'Courgette'"
            >
              <SelectItemIndicator>
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton>
          <Icon icon="radix-icons:chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
