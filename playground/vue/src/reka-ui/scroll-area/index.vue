<script setup lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  // type ScrollAreaRootProps,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "reka-ui";
import ScrollAreaCopy from "./scroll-area-copy.vue";

// const props = defineProps<ScrollAreaRootProps>();
</script>

<template>
  <ScrollAreaRoot style="width: 200px; height: 200px; overflow: hidden">
    <ScrollAreaViewport style="width: 100%; height: 100%">
      <ScrollAreaCopy style="width: 50px" />
      <ScrollAreaCopy style="width: 50px" />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>

    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
