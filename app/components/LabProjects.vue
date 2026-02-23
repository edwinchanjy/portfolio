<template>
  <section
    id="lab"
    class="bg-background-light dark:bg-background-dark relative overflow-hidden py-20"
  >
    <div
      class="absolute inset-0 z-0 opacity-5"
      style="
        background-image: radial-gradient(circle, #333 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <span class="text-primary mb-2 block font-mono text-sm tracking-widest uppercase">
          Self-Hosted Paradise
        </span>
        <h2 class="font-display mb-4 text-4xl text-gray-900 md:text-5xl dark:text-white">
          THE LAB PROJECTS
        </h2>
        <p class="font-mono text-gray-600 dark:text-gray-400">
          Status:
          <span class="text-primary animate-pulse">● ONLINE</span>
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group bg-surface-light dark:bg-surface-dark overflow-hidden rounded-lg border-2
            border-gray-200 transition-colors dark:border-gray-700"
          :class="project.hoverBorder"
        >
          <!-- Terminal title bar -->
          <div
            class="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-4
              font-mono text-xs dark:border-gray-700 dark:bg-black/40"
          >
            <div class="flex gap-2">
              <div class="h-3 w-3 rounded-full bg-red-500"></div>
              <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div class="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-gray-500">{{ project.terminal }}</span>
          </div>

          <div class="p-6">
            <div class="mb-4 flex items-center gap-3">
              <div class="rounded p-2 text-white shadow-lg" :class="project.iconBg">
                <span class="material-icons">{{ project.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ project.title }}
              </h3>
            </div>

            <p class="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded bg-gray-200 px-2 py-1 font-mono text-xs text-gray-700
                  dark:bg-gray-700 dark:text-gray-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Jellyfin Server',
    terminal: 'root@lab:~/jellyfin',
    description:
      'A complete open-source media system. Configured with hardware acceleration, reverse proxy via Nginx, and automated metadata fetching.',
    icon: 'movie',
    iconBg: 'bg-purple-600 shadow-purple-600/50',
    hoverBorder: 'hover:border-primary',
    tags: ['FFmpeg', 'Docker Compose'],
  },
  {
    title: 'Immich Gallery',
    terminal: 'root@lab:~/photos',
    description:
      'Self-hosted photo and video backup solution. Features AI facial recognition, map view, and mobile auto-backup functionality.',
    icon: 'photo_library',
    iconBg: 'bg-blue-500 shadow-blue-500/50',
    hoverBorder: 'hover:border-neon-blue',
    tags: ['Machine Learning', 'PostgreSQL'],
  },
  {
    title: 'Tailscale Mesh',
    terminal: 'root@lab:~/network',
    description:
      'Secure private network connecting my VPS, home server, and laptop. Zero trust architecture with ACLs for strict access control.',
    icon: 'vpn_lock',
    iconBg: 'bg-gray-800 shadow-gray-800/50 border border-gray-600',
    hoverBorder: 'hover:border-neon-purple',
    tags: ['WireGuard', 'Networking'],
  },
]
</script>
