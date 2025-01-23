<script setup lang="ts">
import Basic from "./basic.vue";
import Blurred from "./blurred.vue";
import Customized from "./customized.vue";
import InitialValue from "./initial-value.vue";
import OTPMode from "./otp-mode.vue";
import RootProvider from "./root-provider.vue";
import WithField from "./with-field.vue";
import WithMask from "./with-mask.vue";
</script>

<template>
  <Story title="PinInput">
    <Variant title="Basic">
      <Basic />
    </Variant>
    <Variant title="InitialValue">
      <InitialValue />
    </Variant>
    <Variant title="Customized">
      <Customized />
    </Variant>
    <Variant title="Blurred">
      <Blurred />
    </Variant>
    <Variant title="OTPMode">
      <OTPMode />
    </Variant>
    <Variant title="WithMask">
      <WithMask />
    </Variant>
    <Variant title="With Field">
      <WithField />
    </Variant>
    <Variant title="RootProvider">
      <RootProvider />
    </Variant>
  </Story>
</template>
