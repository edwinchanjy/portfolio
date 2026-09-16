<template>
  <section id="about" class="fade-up mb-20 scroll-mt-8">
    <AppSectionHeader num="02" label-key="nav.about" />

    <!-- Heading -->
    <h3
      class="font-display text-highlighted mb-6 max-w-[20ch] text-4xl leading-tight font-bold
        tracking-tight"
    >
      {{ $t('about.heading1') }}
      <br />
      {{ $t('about.heading2') }}
    </h3>

    <!-- Prose -->
    <div class="mb-8 max-w-2xl">
      <p class="text-default mb-4 text-base leading-relaxed">{{ $t('about.bio1') }}</p>
      <p class="text-default mb-4 text-base leading-relaxed">{{ $t('about.bio2') }}</p>
      <p class="text-default mb-4 text-base leading-relaxed">{{ $t('about.bio3') }}</p>
      <p class="text-muted text-base leading-relaxed">{{ $t('about.bio4') }}</p>
    </div>

    <!-- Stat grid -->
    <div class="bezel">
      <div class="grid grid-cols-2 gap-0.5 sm:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.key"
          class="bezel-panel px-4.5 py-5.5"
          :class="stat.key === 'services' ? 'bg-primary/10' : ''"
        >
          <div
            class="font-display text-hero-stat leading-none font-bold tracking-tighter"
            :class="stat.key === 'services' ? 'text-primary' : 'text-highlighted'"
          >
            {{ stat.value }}
          </div>
          <div
            class="mt-2 text-xs"
            :class="stat.key === 'services' ? 'text-default' : 'text-muted'"
          >
            {{ stat.label }}
          </div>
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
