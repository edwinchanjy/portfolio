<template>
  <aside
    class="scroll-hide border-default bg-default fixed top-0 left-0 hidden h-screen w-63 flex-col
      overflow-auto border-r lg:flex"
    aria-label="Site navigation"
  >
    <!-- Identity -->
    <div class="px-7 pt-13 pb-9">
      <div class="font-display text-highlighted text-lg leading-tight font-bold tracking-tight">
        {{ $t('common.name') }}
      </div>
      <div class="text-muted mt-1.5 text-xs leading-snug">{{ $t('sidebar.role') }}</div>
      <div class="text-2xs text-dimmed mt-0.5 font-mono">{{ $t('sidebar.location') }}</div>

      <!-- Available + light mode toggle row -->
      <div class="mt-3 flex items-center gap-2">
        <span class="dot-pulse bg-success inline-block size-1.5 shrink-0 rounded-full" />
        <span class="text-2xs text-success flex-1 font-mono tracking-wider">
          {{ $t('sidebar.statusAvailable') }}
        </span>
        <button
          :title="$t('sidebar.lightModeTitle')"
          class="border-accented text-2xs text-dimmed hover:border-accented hover:text-default flex
            cursor-pointer items-center gap-1.5 rounded border bg-transparent px-2 py-0.5 font-mono
            transition-colors"
          @click="handleLightModeToggle"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          >
            <circle cx="5.5" cy="5.5" r="2.2" />
            <line x1="5.5" y1="0.5" x2="5.5" y2="1.7" />
            <line x1="5.5" y1="9.3" x2="5.5" y2="10.5" />
            <line x1="0.5" y1="5.5" x2="1.7" y2="5.5" />
            <line x1="9.3" y1="5.5" x2="10.5" y2="5.5" />
            <line x1="2" y1="2" x2="2.8" y2="2.8" />
            <line x1="8.2" y1="8.2" x2="9" y2="9" />
            <line x1="9" y1="2" x2="8.2" y2="2.8" />
            <line x1="2.8" y1="8.2" x2="2" y2="9" />
          </svg>
          ☀
        </button>
      </div>
    </div>

    <!-- Nav -->
    <nav class="flex-1">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="border-default grid w-full cursor-pointer items-center gap-2.5 border-0 border-t
          bg-transparent py-2.5 pr-7 pl-7 text-left font-sans text-sm transition-colors"
        style="grid-template-columns: 26px 1fr 8px"
        :class="activeSection === item.id ? 'text-highlighted' : 'text-muted'"
        @click="scrollTo(item.id)"
      >
        <span
          class="text-2xs font-mono tracking-wider transition-colors"
          :class="activeSection === item.id ? 'text-primary' : 'text-dimmed'"
        >
          {{ item.num }}
        </span>
        <span>{{ $t(`nav.${item.key}`) }}</span>
        <span
          class="inline-block size-1.5 justify-self-end rounded-full transition-all"
          :class="activeSection === item.id ? 'bg-primary' : 'bg-transparent'"
          :style="activeSection === item.id ? 'box-shadow: 0 0 8px var(--ui-primary)' : ''"
        />
      </button>
    </nav>

    <!-- Links -->
    <div class="border-default mt-auto border-t px-7 pt-5 pb-9">
      <div class="text-2xs tracking-14 text-dimmed mb-2.5 font-mono uppercase">
        {{ $t('sidebar.links') }}
      </div>
      <div class="flex flex-col gap-1.5">
        <a
          v-for="lk in links"
          :key="lk.label"
          :href="lk.href"
          :target="lk.href.startsWith('mailto') ? undefined : '_blank'"
          rel="noreferrer"
          class="text-default hover:text-primary flex justify-between py-0.5 text-sm no-underline
            transition-colors"
        >
          <span>{{ lk.label }}</span>
          <span class="text-xs">↗</span>
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  activeSection: string
}>()

const toast = useToast()

function handleLightModeToggle() {
  toast.add({
    title: $t('sidebar.lightModeToast'),
    description: $t('sidebar.lightModeToast2'),
    icon: 'i-lucide-triangle-alert',
    color: 'warning',
  })
}

const navItems = [
  { id: 'intro', key: 'intro', num: '01' },
  { id: 'about', key: 'about', num: '02' },
  { id: 'exp', key: 'experience', num: '03' },
  { id: 'stack', key: 'stack', num: '04' },
  { id: 'projects', key: 'projects', num: '05' },
  { id: 'homelab', key: 'homelab', num: '06' },
  { id: 'vault', key: 'ai', num: '07' },
  { id: 'contact', key: 'contact', num: '08' },
]

const links = [
  { label: 'Email', href: 'mailto:edwinchanjy@hotmail.com' },
  { label: 'GitHub', href: 'https://github.com/edwinchanjy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jia-yu-chan-35a2671b1/' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.scroll-hide {
  scrollbar-width: none;
}
.scroll-hide::-webkit-scrollbar {
  display: none;
}
</style>
