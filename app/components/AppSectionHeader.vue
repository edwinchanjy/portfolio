<template>
  <div class="mb-8 flex items-baseline gap-3.5">
    <span class="text-label tracking-14 text-primary font-mono">{{ num }}</span>
    <span class="text-label tracking-14 text-dimmed font-mono uppercase">
      {{ $t(labelKey) }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  num: string
  labelKey: string
}>()
</script>
