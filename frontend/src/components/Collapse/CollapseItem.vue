<template>
  <div class="vp-collapse-item" :class="{ 'is-disabled': disabled }">
    <div class="vp-collapse-item__header" :id="`item-header-${name}`">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="vp-collapse-item__content" :id="`item-content-${name}`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from "./type";
defineOptions({
  name: "VpCollapseItem",
});
defineProps<CollapseItemProps>();
</script>
