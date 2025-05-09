<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  TagsInputRoot,
} from "reka-ui";
import { ref } from "vue";

export interface TestProps {
  addOnTab?: boolean;
  addOnBlur?: boolean;
}

withDefaults(defineProps<TestProps>(), {
  addOnBlur: false,
  addOnTab: false,
});

const modelValue = ref(["Test"]);
</script>

<template>
  <TagsInputRoot
    v-model="modelValue"
    :add-on-blur="!!addOnBlur"
    :add-on-tab="!!addOnTab"
  >
    <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
      <TagsInputItemText>
        {{ item }}
      </TagsInputItemText>
      <TagsInputItemDelete>
        <Icon icon="lucide:x" />
      </TagsInputItemDelete>
    </TagsInputItem>

    <TagsInputInput placeholder="Anything..." />
  </TagsInputRoot>
</template>
