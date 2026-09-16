<template>
  <section id="exp" class="fade-up mb-20 scroll-mt-8">
    <AppSectionHeader num="03" label-key="nav.experience" />

    <div class="border-default flex flex-col gap-9 border-l pl-6 sm:pl-8">
      <article v-for="(entry, i) in entries" :key="entry.key" class="fade-up relative">
        <span
          class="absolute top-1.5 -left-6 size-1.75 -translate-x-1/2 rounded-full sm:-left-8"
          :class="i === 0 ? 'bg-primary' : 'bg-elevated'"
          :style="
            i === 0
              ? 'box-shadow: 0 0 10px color-mix(in srgb, var(--ui-primary) 80%, transparent)'
              : ''
          "
        />

        <div class="font-mono text-xs" :class="i === 0 ? 'text-primary' : 'text-muted'">
          {{ $t(`experience.${entry.key}.period`) }}
        </div>
        <h3
          class="font-display text-highlighted mt-2.5 text-xl leading-tight font-semibold
            tracking-tight sm:text-2xl"
        >
          {{ $t(`experience.${entry.key}.role`) }}
        </h3>
        <div class="text-muted mt-1.5 mb-4 text-sm">
          {{ $t(`experience.${entry.key}.company`) }}
        </div>
        <ul class="mb-4 flex max-w-2xl list-none flex-col gap-2.5 p-0">
          <li
            v-for="j in entry.bullets"
            :key="j"
            class="text-default relative pl-4 text-sm leading-relaxed"
          >
            <span class="text-primary absolute left-0">·</span>
            {{ $t(`experience.${entry.key}.bullet${j}`) }}
          </li>
        </ul>
        <div class="text-dimmed text-2xs font-mono leading-loose">
          {{ entry.tags.join(' · ') }}
        </div>
      </article>
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
    tags: ['Nuxt', 'Pinia', 'Tailwind', 'Web3', 'MetaMask', 'WalletConnect', 'ethers.js'],
    bullets: 5,
  },
  {
    key: 'entry2',
    tags: ['Nuxt', 'Pinia', 'Tailwind', 'Web3'],
    bullets: 3,
  },
  {
    key: 'entry3',
    tags: ['Flutter Web', 'Dart'],
    bullets: 3,
  },
  {
    key: 'entry4',
    tags: ['Flutter', 'Dart', 'Mobile'],
    bullets: 2,
  },
]
</script>
