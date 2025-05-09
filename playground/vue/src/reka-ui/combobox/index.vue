<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxRoot,
  type ComboboxRootEmits,
  type ComboboxRootProps,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
  useFilter,
  // useForwardPropsEmits,
} from "reka-ui";
import { computed, ref } from "vue";

const props = defineProps<ComboboxRootProps>();
const emits = defineEmits<ComboboxRootEmits>();

// const forwarded = useForwardPropsEmits(props, emits);
const v = ref<any>(props.multiple ? [] : "");

const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
const vegetables = ["Aubergine", "Broccoli", "Carrot", "Courgette", "Leek"];

const open = ref(props.open);

const query = ref("");
const { contains } = useFilter({ sensitivity: "base" });
const filteredOptions = computed(() =>
  options.filter((p) => contains(p, query.value))
);
const filteredVege = computed(() =>
  vegetables.filter((p) => contains(p, query.value))
);
</script>

<template>
  <ComboboxRoot v-model="v" v-model:open="open" name="test">
    <ComboboxAnchor>
      <ComboboxInput placeholder="Placeholder..." />
      <ComboboxTrigger>
        <Icon icon="radix-icons:chevron-down" />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <ComboboxContent>
      <ComboboxViewport>
        <ComboboxGroup>
          <ComboboxLabel> Fruits </ComboboxLabel>

          <ComboboxItem
            v-for="(option, index) in filteredOptions"
            :key="index"
            :value="option"
          >
            <ComboboxItemIndicator>
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
            <span>
              {{ option }}
            </span>
          </ComboboxItem>
          <ComboboxSeparator />
        </ComboboxGroup>

        <ComboboxGroup>
          <ComboboxLabel> Vegetables </ComboboxLabel>
          <ComboboxItem
            v-for="(option, index) in filteredVege"
            :key="index"
            :value="option"
          >
            <ComboboxItemIndicator>
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
            <span>
              {{ option }}
            </span>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
