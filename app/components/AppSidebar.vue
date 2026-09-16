<template>
  <aside
    class="bg-default sticky top-0 hidden h-screen w-60 flex-none flex-col self-start
      overflow-y-auto px-8 pt-12 pb-9 lg:flex"
    aria-label="Site navigation"
  >
    <!-- Identity -->
    <div>
      <div class="font-display text-highlighted text-base leading-tight font-bold tracking-tight">
        {{ $t('common.name') }}
      </div>
      <div class="text-muted mt-1 text-xs leading-snug">{{ $t('sidebar.role') }}</div>
      <div class="mt-3 flex items-center gap-2">
        <span class="dot-pulse bg-success inline-block size-1.5 shrink-0 rounded-full" />
        <span class="text-2xs text-success font-mono tracking-wider uppercase">
          {{ $t('sidebar.statusAvailable') }}
        </span>
      </div>
    </div>

    <!-- Nav -->
    <nav class="my-8 flex flex-col gap-0.5" aria-label="Sections">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="flex cursor-pointer items-baseline gap-2 rounded-full px-2.5 py-1.5 text-left
          font-sans text-sm transition-colors"
        :class="
          activeSection === item.id
            ? 'bg-primary/10 text-highlighted'
            : 'text-muted hover:text-default'
        "
        @click="scrollTo(item.id)"
      >
        <span
          class="text-2xs font-mono transition-colors"
          :class="activeSection === item.id ? 'text-primary' : 'text-dimmed'"
        >
          {{ item.num }}
        </span>
        {{ $t(`nav.${item.key}`) }}
      </button>
    </nav>

    <!-- Links -->
    <div class="mt-auto flex flex-col gap-2">
      <a
        v-for="lk in links"
        :key="lk.labelKey"
        :href="lk.href"
        :target="lk.download || lk.href.startsWith('mailto') ? undefined : '_blank'"
        :download="lk.download ? '' : undefined"
        rel="noreferrer"
        class="text-default hover:text-primary inline-flex items-center gap-2 text-sm no-underline
          transition-colors"
      >
        <UIcon v-if="lk.icon" :name="lk.icon" class="size-3.5 opacity-70" />
        <span>{{ $t(lk.labelKey) }}</span>
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  activeSection: string
}>()

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

const links: { labelKey: string; href: string; download?: boolean; icon?: string }[] = [
  {
    labelKey: 'sidebar.linkGithub',
    href: 'https://github.com/edwinchanjy',
    icon: 'i-local-github',
  },
  {
    labelKey: 'sidebar.linkLinkedin',
    href: 'https://www.linkedin.com/in/jia-yu-chan-35a2671b1/',
    icon: 'i-local-linkedin',
  },
  {
    labelKey: 'sidebar.linkResume',
    href: '/edwin-chan-jia-yu-resume.pdf',
    icon: 'i-local-download',
    download: true,
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
