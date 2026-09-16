<template>
  <div
    class="rounded-full border p-1"
    :class="variant === 'accent' ? 'border-primary/22 bg-primary/6' : 'border-default bg-default'"
  >
    <a
      :href="href"
      :target="external ? '_blank' : undefined"
      :download="download ? '' : undefined"
      :rel="external ? 'noreferrer' : undefined"
      class="press-link inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-5 text-sm
        no-underline transition-colors"
      :class="
        variant === 'accent'
          ? 'bg-primary/14 text-primary'
          : 'bg-muted text-highlighted hover:bg-elevated'
      "
    >
      {{ label }}
      <span
        class="tile-icon inline-flex size-7.5 items-center justify-center rounded-full font-mono
          text-xs"
        :class="variant === 'accent' ? 'bg-primary/18' : 'bg-elevated'"
      >
        <UIcon :name="icon === 'down' ? 'i-local-arrow-down' : 'i-local-arrow-up-right'" />
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    label: string
    icon?: 'up-right' | 'down'
    variant?: 'accent' | 'ghost'
    external?: boolean
    download?: boolean
  }>(),
  {
    icon: 'up-right',
    variant: 'ghost',
    external: false,
    download: false,
  },
)
</script>
