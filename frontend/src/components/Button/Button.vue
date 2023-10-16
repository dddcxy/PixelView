<template>
  <button
    ref="_ref"
    class="vp-button"
    :class="{
      [`vp-button--${type}`]: type,
      [`vp-button--${size}`]: size,
      'is-plain': plain,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { ButtonProps } from "./type";
defineOptions({
  name: "VpButton",
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
  type: "default",
});

// 暴露组件实例
const _ref = ref<HTMLButtonElement>();
defineExpose({
  ref: _ref,
});

onMounted(() => {
  _ref.value?.addEventListener("mouseup", function () {
    this.blur();
  });
});
</script>

<style>
.vp-button {
  background-color: var(--main-bg-color);
}
</style>
