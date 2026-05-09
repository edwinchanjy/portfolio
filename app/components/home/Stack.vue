<template>
  <section id="stack" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">04</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        Stack
      </span>
    </div>

    <!-- Three-column grid -->
    <div class="grid grid-cols-1 gap-x-9 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="group in groups" :key="group.key">
        <div class="font-display text-highlighted mb-0.5 text-sm font-semibold">
          {{ $t(group.labelKey) }}
        </div>
        <div class="text-dimmed mb-3.5 text-xs">{{ $t(group.subKey) }}</div>
        <ul class="m-0 list-none p-0">
          <li
            v-for="skill in group.items"
            :key="skill.name"
            class="border-default flex items-center gap-2.5 border-b py-1.5"
          >
            <!-- Icon -->
            <UIcon :name="skill.iconPath" class="size-5" />
            <!-- Name -->
            <span class="text-highlighted flex-1 text-sm">{{ skill.name }}</span>
            <!-- Level bar -->
            <div class="bg-line-2 h-0.5 w-8 shrink-0 rounded-sm">
              <div
                class="bg-primary h-full rounded-sm opacity-70"
                :style="`width: ${skill.level * 100}%`"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillItem {
  name: string
  level: number
  iconPath: string
}

const ICONS: Record<string, string> = {
  nuxt: 'i-local-nuxt',
  vue: 'i-local-vue',
  nuxtui: 'i-local-nuxtui',
  pinia: 'i-local-pinia',
  tailwind: 'i-local-tailwind',
  typescript: 'i-local-typescript',
  metamask: 'i-local-metamask',
  walletconnect: 'i-local-walletconnect',
  ethers: 'i-local-ethers',
  flutter: 'i-local-flutter',
  dart: 'i-local-dart',
  solidity: 'i-local-solidity',
  docker: 'i-local-docker',
  n8n: 'i-local-n8n',
  tailscale: 'i-local-tailscale',
  claude: 'i-local-claude',
  obsidian: 'i-local-obsidian',
}

const groups = computed(() => [
  {
    key: 'daily',
    labelKey: 'stack.dailyLabel',
    subKey: 'stack.dailySub',
    items: [
      { name: 'Nuxt 3', level: 0.95, iconPath: ICONS.nuxt },
      { name: 'Vue 3', level: 0.95, iconPath: ICONS.vue },
      { name: 'NuxtUI', level: 0.95, iconPath: ICONS.nuxtui },
      { name: 'Pinia', level: 0.95, iconPath: ICONS.pinia },
      { name: 'Tailwind', level: 0.95, iconPath: ICONS.tailwind },
      { name: 'TypeScript', level: 0.95, iconPath: ICONS.typescript },
      { name: 'MetaMask', level: 0.9, iconPath: ICONS.metamask },
      { name: 'WalletConnect', level: 0.9, iconPath: ICONS.walletconnect },
      { name: 'ethers.js', level: 0.9, iconPath: ICONS.ethers },
    ] as SkillItem[],
  },
  {
    key: 'comfy',
    labelKey: 'stack.comfyLabel',
    subKey: 'stack.comfySub',
    items: [
      { name: 'Flutter', level: 0.8, iconPath: ICONS.flutter },
      { name: 'Dart', level: 0.8, iconPath: ICONS.dart },
      { name: 'Solidity (read)', level: 0.55, iconPath: ICONS.solidity },
      { name: 'Docker Compose', level: 0.8, iconPath: ICONS.docker },
    ] as SkillItem[],
  },
  {
    key: 'curious',
    labelKey: 'stack.curiousLabel',
    subKey: 'stack.curiousSub',
    items: [
      { name: 'n8n', level: 0.7, iconPath: ICONS.n8n },
      { name: 'Tailscale', level: 0.78, iconPath: ICONS.tailscale },
      { name: 'Claude API', level: 0.78, iconPath: ICONS.claude },
      { name: 'Obsidian', level: 0.85, iconPath: ICONS.obsidian },
    ] as SkillItem[],
  },
])
</script>
