<template>
  <section id="skills" class="relative bg-white py-20 dark:bg-[#131c31]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 flex items-center gap-4">
        <div class="h-px flex-1 bg-gray-300 dark:bg-gray-700"></div>
        <h2 class="font-display text-center text-3xl text-gray-900 dark:text-white">
          TECH ARSENAL
        </h2>
        <div class="h-px flex-1 bg-gray-300 dark:bg-gray-700"></div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group relative rounded-xl p-1 transition-all duration-500"
          :class="skill.gradientFrom"
        >
          <div
            class="bg-surface-light dark:bg-surface-dark relative h-full overflow-hidden rounded-lg
              p-6"
          >
            <div
              class="absolute top-0 right-0 p-4 opacity-10 transition-opacity
                group-hover:opacity-20"
            >
              <span class="material-icons text-6xl">{{ skill.bgIcon }}</span>
            </div>

            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
              :class="skill.iconBg"
            >
              <span
                v-if="skill.materialIcon"
                class="material-icons text-3xl"
                :class="skill.iconColor"
              >
                {{ skill.materialIcon }}
              </span>
              <svg v-else class="text-primary h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M2.273 13.565L10.3 22l1.643-2.614H19.7l2.027-2.614L10.3 2.068 2.273 13.565zm2.748-1.57h10.316L10.3 4.962 5.021 11.995z"
                ></path>
              </svg>
            </div>

            <h3 class="mb-2 font-mono text-xl font-bold text-gray-900 dark:text-white">
              {{ skill.name }}
            </h3>
            <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">{{ skill.description }}</p>

            <div class="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                class="h-1.5 rounded-full"
                :class="skill.barColor"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    name: 'Nuxt.js / Vue',
    description:
      'Server-side rendering, static generation, and building performant modern web applications.',
    level: 95,
    gradientFrom:
      'bg-gradient-to-b from-primary via-transparent to-transparent hover:from-primary hover:to-neon-purple',
    bgIcon: 'code',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: null,
    materialIcon: null,
    barColor: 'bg-primary',
  },
  {
    name: 'CI/CD & Jenkins',
    description: 'Automating deployment pipelines. If you have to do it twice, automate it.',
    level: 80,
    gradientFrom:
      'bg-gradient-to-b from-gray-400 via-transparent to-transparent hover:from-neon-blue hover:to-primary',
    bgIcon: 'settings_suggest',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-neon-blue',
    materialIcon: 'attribution',
    barColor: 'bg-neon-blue',
  },
  {
    name: 'Docker & Containers',
    description: 'Containerizing applications for consistent environments from dev to prod.',
    level: 85,
    gradientFrom:
      'bg-gradient-to-b from-blue-400 via-transparent to-transparent hover:from-neon-purple hover:to-neon-blue',
    bgIcon: 'layers',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-neon-purple',
    materialIcon: 'view_in_ar',
    barColor: 'bg-neon-purple',
  },
]
</script>
