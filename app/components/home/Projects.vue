<template>
  <section id="projects" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">05</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        Projects
      </span>
    </div>

    <h3
      class="font-display text-section-h3 text-highlighted mb-3.5 leading-tight font-bold
        tracking-tight"
    >
      {{ $t('projects.heading') }}
    </h3>
    <p class="text-default mb-5 text-base leading-relaxed">{{ $t('projects.desc') }}</p>

    <!-- 2×2 cards -->
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <UCard
        v-for="(project, i) in projects"
        :key="i"
        class="card-hover"
        :ui="{
          root: 'bg-muted border border-default rounded-lg card-hover',
          body: 'py-3.5 px-4 sm:py-3.5 sm:px-4',
        }"
      >
        <!-- Header -->
        <div class="mb-3 flex items-start justify-between gap-3">
          <h3
            class="text-base font-semibold"
            style="color: var(--text-1); font-family: var(--font-display); letter-spacing: -0.01em"
          >
            {{ project.name }}
          </h3>
        </div>

        <!-- Description -->
        <p
          class="mb-4 flex-1 text-sm leading-relaxed"
          style="color: var(--text-2); line-height: 1.75"
        >
          {{ project.desc }}
        </p>

        <!-- Tech chips -->
        <div class="flex flex-wrap gap-1.5">
          <UBadge v-for="tech in project.tech" :key="tech" variant="subtle">
            {{ tech }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    key: 'e03',
    name: 'e03',
    desc: 'An E-commerce web app built with Nuxt 3, featuring crypto as a payment.',
    tech: ['Nuxt', 'ethers.js', 'Wallet Connect', 'MetaMask', 'TypeScript'],
  },
  {
    key: 'nexus-realty-hub',
    name: 'Nexus Realty Hub',
    desc: 'Crypto-based real estate investment built with Nuxt 3, integrating blockchain for secure transactions.',
    tech: ['Nuxt', 'ethers.js', 'Wallet Connect', 'MetaMask', 'TypeScript'],
  },
  {
    key: 'travel-log',
    name: 'Travel Log',
    desc: 'An Itinerary planner and journal app built with Nuxt 3, allowing users to document and share their travel experiences.',
    tech: ['Nuxt', 'TypeScript', 'Python', 'Flask', 'SQLite'],
  },
  {
    key: 'survey-app',
    name: 'Survey App',
    desc: 'A survey application built with Nuxt 3, allowing users to create and participate in surveys.',
    tech: ['Nuxt', 'Angular', 'NestJs', 'SurveyJs'],
  },
]
</script>
