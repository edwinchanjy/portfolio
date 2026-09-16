<template>
  <section id="projects" class="fade-up mb-20 scroll-mt-8">
    <AppSectionHeader num="05" label-key="nav.projects" />

    <h3
      class="font-display text-section-h3 text-highlighted mb-3.5 max-w-[22ch] leading-tight
        font-bold tracking-tight"
    >
      {{ $t('projects.heading') }}
    </h3>
    <p class="text-default mb-5 max-w-2xl text-base leading-relaxed">{{ $t('projects.desc') }}</p>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project.key"
        :href="project.href"
        target="_blank"
        rel="noreferrer"
        class="bezel tile-hover no-underline"
      >
        <div class="bezel-panel flex min-h-38 flex-col justify-between gap-6 p-5 sm:p-6.5">
          <div class="flex items-start justify-between gap-3.5">
            <span
              class="font-display text-highlighted text-xl leading-tight font-semibold
                tracking-tight"
            >
              {{ project.name }}
            </span>
            <span
              class="tile-icon bg-elevated text-primary inline-flex size-7.5 shrink-0 items-center
                justify-center rounded-full font-mono text-xs"
            >
              <UIcon name="i-local-arrow-up-right" />
            </span>
          </div>
          <div class="text-muted text-2xs font-mono leading-loose">
            {{ project.tech.join(' · ') }}
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    key: 'e03',
    name: 'e03',
    href: 'https://github.com/edwinchanjy',
    tech: ['Nuxt', 'ethers.js', 'WalletConnect', 'MetaMask', 'TypeScript'],
  },
  {
    key: 'nexus-realty-hub',
    name: 'Nexus Realty Hub',
    href: 'https://github.com/edwinchanjy',
    tech: ['Nuxt', 'ethers.js', 'WalletConnect', 'MetaMask', 'TypeScript'],
  },
  {
    key: 'travel-log',
    name: 'Travel Log',
    href: 'https://github.com/edwinchanjy',
    tech: ['Nuxt', 'TypeScript', 'Python', 'Flask', 'SQLite'],
  },
  {
    key: 'survey-app',
    name: 'Survey App',
    href: 'https://github.com/edwinchanjy',
    tech: ['Nuxt', 'Angular', 'NestJs', 'SurveyJs'],
  },
]
</script>
