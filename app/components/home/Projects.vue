<template>
  <!-- TODO: REFACTOR THIS WHOLE COMPONENT -->
  <section id="projects" class="fade-up px-8 py-20" style="background-color: var(--bg-1)">
    <div class="mx-auto w-full max-w-3xl">
      <!-- Section label -->
      <p
        class="text-label tracking-14 mb-4 font-medium uppercase"
        style="color: var(--text-3); font-family: var(--font-mono)"
      >
        {{ $t('projects.sectionLabel') }}
      </p>

      <h2
        class="mb-2 text-3xl font-bold"
        style="color: var(--text-1); font-family: var(--font-display); letter-spacing: -0.025em"
      >
        {{ $t('projects.heading') }}
      </h2>
      <p class="mb-12 text-base" style="color: var(--text-3)">
        {{ $t('projects.subtext') }}
      </p>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.key"
          class="card-hover flex flex-col rounded-lg p-5"
          style="background-color: var(--bg-2); border: 1px solid var(--line-1)"
        >
          <!-- Header -->
          <div class="mb-3 flex items-start justify-between gap-3">
            <h3
              class="text-base font-semibold"
              style="
                color: var(--text-1);
                font-family: var(--font-display);
                letter-spacing: -0.01em;
              "
            >
              {{ $t(project.nameKey) }}
            </h3>
            <div class="flex shrink-0 items-center gap-2">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors duration-150"
                :style="`color: var(--text-4);`"
                :aria-label="$t('projects.githubLink')"
              >
                <UIcon name="i-lucide-github" class="h-4 w-4 hover:text-[color:var(--text-2)]" />
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors duration-150"
                :style="`color: var(--text-4);`"
                :aria-label="$t('projects.liveLink')"
              >
                <UIcon
                  name="i-lucide-external-link"
                  class="h-4 w-4 hover:text-[color:var(--text-2)]"
                />
              </a>
            </div>
          </div>

          <!-- Description -->
          <p
            class="mb-4 flex-1 text-sm leading-relaxed"
            style="color: var(--text-2); line-height: 1.75"
          >
            {{ $t(project.descKey) }}
          </p>

          <!-- Tech chips -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="rounded px-2 py-0.5 text-xs"
              style="
                background-color: var(--bg-inset);
                color: var(--text-3);
                font-family: var(--font-mono);
                border: 1px solid var(--line-1);
              "
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  key: string
  nameKey: string
  descKey: string
  tech: string[]
  github?: string
  live?: string
  meta?: string
}

const projects: Project[] = [
  {
    key: 'chainvault',
    nameKey: 'projects.chainvault.name',
    descKey: 'projects.chainvault.desc',
    tech: ['Solidity', 'React', 'ethers.js', 'TypeScript'],
    github: 'https://github.com/edwinchan/chainvault',
  },
  {
    key: 'devflow',
    nameKey: 'projects.devflow.name',
    descKey: 'projects.devflow.desc',
    tech: ['Vue', 'Nuxt', 'Go', 'PostgreSQL'],
    github: 'https://github.com/edwinchan/devflow',
    live: 'https://devflow.edwinchan.dev',
  },
  {
    key: 'automate',
    nameKey: 'projects.automate.name',
    descKey: 'projects.automate.desc',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
    github: 'https://github.com/edwinchan/automate',
  },
  {
    key: 'pocketdb',
    nameKey: 'projects.pocketdb.name',
    descKey: 'projects.pocketdb.desc',
    tech: ['Go', 'C', 'Embedded'],
    github: 'https://github.com/edwinchan/pocketdb',
  },
]
</script>
