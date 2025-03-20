<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from "reka-ui";
import { ref } from "vue";

const switchState = ref(true);
</script>

<template>
  <div>
    <label for="airplane-mode"> Airplane mode </label>
    <SwitchRoot id="airplane-mode" v-model="switchState">
      <SwitchThumb />
    </SwitchRoot>
  </div>
</template>
