<template>
  <section id="web3" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">05</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        Web3
      </span>
    </div>

    <h3
      class="font-display text-section-h3 text-highlighted mb-3.5 leading-tight font-bold
        tracking-tight"
    >
      {{ $t('web3.heading') }}
    </h3>
    <p class="text-default mb-5 text-base leading-relaxed">{{ $t('web3.desc') }}</p>

    <!-- 2×2 cards -->
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <UCard
        v-for="(item, i) in items"
        :key="i"
        class="card-hover"
        :ui="{
          root: 'bg-muted border border-default rounded-lg card-hover',
          body: 'py-3.5 px-4 sm:py-3.5 sm:px-4',
        }"
      >
        <div class="flex items-start gap-3">
          <span class="text-primary mt-0.5 flex shrink-0 opacity-70">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="item.icon"
            />
          </span>
          <span class="text-default text-sm">{{ $t(item.key) }}</span>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    key: 'web3.item1',
    icon: '<path d="M4 9 Q10 3 16 9" /><path d="M7 12 Q10 9 13 12" /><circle cx="10" cy="15" r="1.8" />',
  },
  {
    key: 'web3.item2',
    icon: '<rect x="2" y="5" width="16" height="12" rx="2" /><path d="M2 9 L18 9" /><rect x="13" y="12" width="4" height="2.5" rx="1" />',
  },
  {
    key: 'web3.item3',
    icon: '<polygon points="10,2 17,9 10,12 3,9" /><polygon points="10,12 17,9 10,18 3,9" />',
  },
  {
    key: 'web3.item4',
    icon: '<path d="M4 2 L4 18 L7 16 L10 18 L13 16 L16 18 L16 2 Z" /><line x1="7" y1="7" x2="13" y2="7" /><line x1="7" y1="10" x2="13" y2="10" /><line x1="7" y1="13" x2="10" y2="13" />',
  },
]
</script>
