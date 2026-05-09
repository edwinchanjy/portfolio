<template>
  <section id="about" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">02</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        About
      </span>
    </div>

    <!-- Heading -->
    <h3 class="font-display text-highlighted mb-6 text-4xl leading-tight font-bold tracking-tight">
      {{ $t('about.heading1') }}
      <br />
      {{ $t('about.heading2') }}
    </h3>

    <!-- Two-column layout -->
    <div class="about-grid">
      <!-- Prose -->
      <div>
        <p class="text-default mb-4 text-base leading-relaxed">{{ $t('about.bio1') }}</p>
        <p class="text-default mb-4 text-base leading-relaxed">{{ $t('about.bio2') }}</p>
        <p class="text-default mb-4 text-base leading-relaxed">{{ $t('about.bio3') }}</p>
        <p class="text-muted text-base leading-relaxed">{{ $t('about.bio4') }}</p>
      </div>

      <div class="stats-grid">
        <div
          v-for="stat in stats"
          :key="stat.key"
          class="border-default border-r border-b px-4 py-5"
        >
          <div
            class="font-display text-hero-stat leading-none font-bold tracking-tighter"
            :class="stat.key === 'services' ? 'text-primary' : 'text-highlighted'"
          >
            {{ stat.value }}
          </div>
          <div class="text-muted mt-2 text-xs">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = computed(() => [
  { key: 'years', value: '5+', label: $t('about.yearsLabel') },
  { key: 'stacks', value: '2', label: $t('about.stacksLabel') },
  { key: 'services', value: '10+', label: $t('about.servicesLabel') },
  { key: 'bugs', value: '∞', label: $t('about.bugsTicketedLabel') },
])
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;
}

@media (min-width: 640px) {
  .about-grid {
    grid-template-columns: 1fr 260px;
    gap: 56px;
  }
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 320px;
    gap: 56px;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--ui-border);
  border-left: 1px solid var(--ui-border);
  position: sticky;
  top: 32px;
}
</style>
