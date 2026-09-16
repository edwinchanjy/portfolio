<template>
  <div class="lg:hidden">
    <header class="bg-muted fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-5">
      <span class="font-display text-highlighted truncate text-sm font-bold tracking-tight">
        {{ $t('common.name') }}
      </span>

      <div class="flex items-center gap-4">
        <span class="flex items-center gap-1.5">
          <span class="dot-pulse bg-success inline-block size-1.5 shrink-0 rounded-full" />
          <span class="text-2xs text-success font-mono tracking-wider uppercase">
            {{ $t('sidebar.statusAvailable') }}
          </span>
        </span>

        <button
          type="button"
          class="text-highlighted flex size-8 shrink-0 cursor-pointer items-center justify-center
            rounded-full transition-colors"
          :class="isOpen ? 'bg-elevated' : 'hover:bg-elevated'"
          :aria-expanded="isOpen"
          aria-controls="mobile-nav-panel"
          :aria-label="isOpen ? $t('mobile.closeMenu') : $t('mobile.openMenu')"
          @click="isOpen = !isOpen"
        >
          <span class="relative block size-4">
            <span
              class="absolute left-0 block h-px w-4 rounded-full bg-current transition-transform"
              :class="isOpen ? 'top-1/2 rotate-45' : 'top-1'"
            />
            <span
              class="absolute top-1/2 left-0 block h-px w-4 rounded-full bg-current
                transition-opacity"
              :class="isOpen ? 'opacity-0' : 'opacity-100'"
            />
            <span
              class="absolute left-0 block h-px w-4 rounded-full bg-current transition-transform"
              :class="isOpen ? 'top-1/2 -rotate-45' : 'top-3'"
            />
          </span>
        </button>
      </div>
    </header>

    <Transition name="mobile-panel">
      <div v-if="isOpen" class="fixed inset-0 top-14 z-40" @click="isOpen = false">
        <div class="bg-default/70 absolute inset-0" />
        <nav
          id="mobile-nav-panel"
          class="bg-muted relative flex max-h-[calc(100dvh-3.5rem)] flex-col gap-0.5 overflow-y-auto
            px-5 pt-3 pb-6"
          aria-label="Sections"
          @click.stop
        >
          <button
            v-for="item in navItems"
            :key="item.id"
            class="flex cursor-pointer items-baseline gap-2.5 rounded-full px-3 py-2.5 text-left
              font-sans text-sm transition-colors"
            :class="
              activeSection === item.id
                ? 'bg-primary/10 text-highlighted'
                : 'text-muted hover:text-default'
            "
            @click="navigate(item.id)"
          >
            <span
              class="text-2xs font-mono transition-colors"
              :class="activeSection === item.id ? 'text-primary' : 'text-dimmed'"
            >
              {{ item.num }}
            </span>
            {{ $t(`nav.${item.key}`) }}
          </button>

          <div class="mt-4 flex flex-col gap-3 px-3">
            <a
              v-for="lk in links"
              :key="lk.labelKey"
              :href="lk.href"
              :target="lk.download || lk.href.startsWith('mailto') ? undefined : '_blank'"
              :download="lk.download ? '' : undefined"
              rel="noreferrer"
              class="text-default hover:text-primary inline-flex items-center gap-2 text-sm
                no-underline transition-colors"
              @click="isOpen = false"
            >
              <UIcon v-if="lk.icon" :name="lk.icon" class="size-3.5 opacity-70" />
              <span>{{ $t(lk.labelKey) }}</span>
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeSection: string
}>()

const isOpen = ref(false)

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

function navigate(id: string) {
  isOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function closeOnEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => window.addEventListener('keydown', closeOnEscape))
onUnmounted(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<style scoped>
.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition: opacity 0.18s ease;
}

.mobile-panel-enter-active > nav,
.mobile-panel-leave-active > nav {
  transition:
    opacity 0.18s ease,
    transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  opacity: 0;
}

.mobile-panel-enter-from > nav,
.mobile-panel-leave-to > nav {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-panel-enter-active,
  .mobile-panel-leave-active,
  .mobile-panel-enter-active > nav,
  .mobile-panel-leave-active > nav {
    transition: none;
  }
}
</style>
