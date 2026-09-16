<template>
  <section id="stack" class="fade-up mb-20 scroll-mt-8">
    <AppSectionHeader num="04" label-key="nav.stack" />

    <div class="flex flex-col gap-4">
      <!-- Daily: full-width -->
      <div class="bezel">
        <div class="bezel-panel p-5 sm:p-6.5">
          <div class="mb-4.5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
            <span class="font-display text-highlighted text-lg font-semibold tracking-tight">
              {{ $t('stack.dailyLabel') }}
            </span>
            <span class="text-dimmed text-sm">{{ $t('stack.dailySub') }}</span>
          </div>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="skill in groups[0]?.items"
              :key="skill.name"
              class="border-primary/24 bg-primary/8 text-highlighted inline-flex items-center gap-2
                rounded-full border px-3.5 py-2 text-sm"
            >
              <UIcon :name="skill.iconPath" class="size-3.75" />
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Comfy + Curious: side by side -->
      <div class="flex flex-wrap gap-4">
        <div v-for="group in groups.slice(1)" :key="group.key" class="bezel min-w-70 flex-1">
          <div class="bezel-panel p-5 sm:p-6.5">
            <div class="mb-4.5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
              <span class="font-display text-highlighted text-lg font-semibold tracking-tight">
                {{ $t(group.labelKey) }}
              </span>
              <span class="text-dimmed text-sm">{{ $t(group.subKey) }}</span>
            </div>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="skill in group.items"
                :key="skill.name"
                class="border-accented text-default inline-flex items-center gap-2 rounded-full
                  border px-3.5 py-2 text-sm"
              >
                <UIcon :name="skill.iconPath" class="size-3.75" />
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillItem {
  name: string
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
      { name: 'Nuxt 3', iconPath: ICONS.nuxt },
      { name: 'Vue 3', iconPath: ICONS.vue },
      { name: 'NuxtUI', iconPath: ICONS.nuxtui },
      { name: 'Pinia', iconPath: ICONS.pinia },
      { name: 'Tailwind', iconPath: ICONS.tailwind },
      { name: 'TypeScript', iconPath: ICONS.typescript },
      { name: 'MetaMask', iconPath: ICONS.metamask },
      { name: 'WalletConnect', iconPath: ICONS.walletconnect },
      { name: 'ethers.js', iconPath: ICONS.ethers },
    ] as SkillItem[],
  },
  {
    key: 'comfy',
    labelKey: 'stack.comfyLabel',
    subKey: 'stack.comfySub',
    items: [
      { name: 'Flutter', iconPath: ICONS.flutter },
      { name: 'Dart', iconPath: ICONS.dart },
      { name: 'Solidity (read)', iconPath: ICONS.solidity },
      { name: 'Docker Compose', iconPath: ICONS.docker },
    ] as SkillItem[],
  },
  {
    key: 'curious',
    labelKey: 'stack.curiousLabel',
    subKey: 'stack.curiousSub',
    items: [
      { name: 'n8n', iconPath: ICONS.n8n },
      { name: 'Tailscale', iconPath: ICONS.tailscale },
      { name: 'Claude API', iconPath: ICONS.claude },
      { name: 'Obsidian', iconPath: ICONS.obsidian },
    ] as SkillItem[],
  },
])
</script>
