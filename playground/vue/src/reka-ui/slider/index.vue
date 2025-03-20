<script setup lang="ts">
// import type { SliderRootEmits, SliderRootProps } from "reka-ui";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  // useForwardPropsEmits,
} from "reka-ui";
// import { ref } from "vue";

// const props = defineProps<SliderRootProps>();
// const emits = defineEmits<SliderRootEmits>();

// const sliderValue = ref([50]);

// const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <SliderRoot name="slider">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
