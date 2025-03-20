<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  TreeItem,
  TreeRoot,
  type TreeRootEmits,
  type TreeRootProps,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<Omit<TreeRootProps, "items" | "getKey">>();
const emits = defineEmits<TreeRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const items = [
  { title: "index.vue", icon: "vue" },
  {
    title: "lib",
    icon: "folder",
    children: [
      {
        title: "tree",
        icon: "folder",
        children: [
          {
            title: "Tree.vue",
            icon: "vue",
          },
          {
            title: "TreeView.vue",
            icon: "vue",
          },
        ],
      },
      {
        title: "icons",
        icon: "folder",
        children: [
          { title: "JS.vue", icon: "vue" },
          { title: "vue.vue", icon: "vue" },
        ],
      },
      {
        title: "index.js",
        icon: "js",
      },
    ],
  },
  {
    title: "routes",
    icon: "folder",
    children: [
      {
        title: "contents",
        icon: "folder",
        children: [
          {
            title: "+layout.vue",
            icon: "vue",
          },
          {
            title: "+page.vue",
            icon: "vue",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    v-bind="forwarded"
    :items="items"
    :get-key="(item) => item.title"
  >
    <TreeItem
      v-for="item in flattenItems"
      :key="item._id"
      :style="{ 'margin-left': `${item.level}rem` }"
      v-bind="item.bind"
    >
      <Icon v-if="item.hasChildren" icon="radix-icons:chevron-down" />
      <div>
        {{ item.value.title }}
      </div>
    </TreeItem>
  </TreeRoot>
</template>
