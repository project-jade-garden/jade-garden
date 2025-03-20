<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "reka-ui";
import { ref } from "vue";

const dialogOpen = ref(false);
</script>

<template>
  <DialogRoot v-model:open="dialogOpen">
    <DialogTrigger> Edit profile </DialogTrigger>
    <DialogPortal>
      <Transition name="fade">
        <DialogOverlay />
      </Transition>
      <Transition name="fade">
        <DialogContent
          :is-escape-key-down-default="true"
          @pointer-down-outside.prevent
        >
          <DialogTitle> Edit profile </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <fieldset>
            <label for="name"> Name </label>
            <input id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset>
            <label for="username"> Username </label>
            <input id="username" defaultValue="@peduarte" />
          </fieldset>
          <div>
            <DialogClose as-child>
              <button>Save changes</button>
            </DialogClose>
          </div>
          <DialogClose aria-label="Close">
            <Icon icon="lucide:x" />
          </DialogClose>
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
