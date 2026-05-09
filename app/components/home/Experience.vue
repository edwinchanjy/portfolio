<template>
  <section id="exp" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">03</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        Experience
      </span>
    </div>

    <!-- Entries -->
    <div
      v-for="(entry, i) in entries"
      :key="entry.key"
      class="exp-row fade-up border-default border-b py-6"
      :style="`transition-delay: ${i * 60}ms`"
    >
      <!-- Left: period + tags -->
      <div class="pt-0.5">
        <div class="text-dimmed font-mono text-xs leading-relaxed">
          {{ $t(`experience.${entry.key}.period`) }}
        </div>
        <div class="mt-2.5 flex flex-wrap gap-1">
          <span
            v-for="tag in entry.tags"
            :key="tag"
            class="border-accented bg-muted text-muted rounded border px-2.5 py-0.5 text-xs"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Right: role + bullets -->
      <div>
        <div
          class="font-display text-highlighted text-xl leading-tight font-semibold tracking-tight"
        >
          {{ $t(`experience.${entry.key}.role`) }}
        </div>
        <div class="text-muted mt-0.5 mb-3.5 text-sm">
          {{ $t(`experience.${entry.key}.company`) }}
        </div>
        <ul class="flex list-none flex-col gap-1.5 p-0">
          <li
            v-for="j in entry.bullets"
            :key="j"
            class="text-default relative pl-4 text-sm leading-snug"
          >
            <span class="text-primary absolute left-0 text-base leading-snug">·</span>
            {{ $t(`experience.${entry.key}.bullet${j}`) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Entry {
  key: string
  tags: string[]
  bullets: number
}

const entries: Entry[] = [
  {
    key: 'entry1',
    tags: ['Nuxt', 'Pinia', 'Tailwind', 'Flutter Web', 'Web3'],
    bullets: 4,
  },
  {
    key: 'entry2',
    tags: ['Flutter', 'Dart', 'Mobile'],
    bullets: 2,
  },
]
</script>

<style scoped>
.exp-row {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 36px;
}

@media (max-width: 639px) {
  .exp-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
