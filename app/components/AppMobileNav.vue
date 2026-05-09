<template>
  <!-- Mobile top bar -->
  <header
    class="border-default bg-default fixed top-0 right-0 left-0 z-50 flex h-13 items-center gap-3
      border-b px-5 lg:hidden"
  >
    <span class="font-display text-highlighted flex-1 text-base font-bold tracking-tight">
      {{ $t('common.name') }}
    </span>

    <!-- Available indicator -->
    <div class="flex items-center gap-2">
      <span class="dot-pulse bg-success inline-block size-1.5 rounded-full" />
      <span class="text-2xs text-success font-mono tracking-wider">
        {{ $t('sidebar.statusAvailable') }}
      </span>
    </div>

    <!-- Hamburger -->
    <button
      :aria-label="$t('mobile.openMenu')"
      class="border-accented text-default flex cursor-pointer flex-col gap-1 rounded border
        bg-transparent px-2 py-1.5"
      @click="isOpen = !isOpen"
    >
      <span
        v-for="i in [0, 1, 2]"
        :key="i"
        class="block h-px w-4.5 rounded-sm bg-current transition-transform"
        :style="{
          transform:
            isOpen && i === 0
              ? 'rotate(45deg) translate(4px,4px)'
              : isOpen && i === 2
                ? 'rotate(-45deg) translate(4px,-4px)'
                : 'none',
          opacity: isOpen && i === 1 ? 0 : 1,
        }"
      />
    </button>
  </header>

  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="bg-default/85 fixed inset-0 top-13 z-40 backdrop-blur-sm lg:hidden"
      @click="isOpen = false"
    />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide-right">
    <nav
      v-if="isOpen"
      class="border-default bg-muted fixed top-13 right-0 z-50 flex h-full w-65 flex-col
        overflow-y-auto border-l px-6 pt-5 pb-8 lg:hidden"
      @click.stop
    >
      <!-- Nav items -->
      <div>
        <button
          v-for="item in navItems"
          :key="item.id"
          class="border-default grid w-full cursor-pointer items-center gap-2.5 border-0 border-t
            bg-transparent py-3 text-left font-sans text-base transition-colors"
          style="grid-template-columns: 26px 1fr 8px"
          :class="activeSection === item.id ? 'text-highlighted' : 'text-muted'"
          @click="navigate(item.id)"
        >
          <span
            class="text-2xs font-mono tracking-wider"
            :class="activeSection === item.id ? 'text-primary' : 'text-dimmed'"
          >
            {{ item.num }}
          </span>
          <span>{{ $t(`nav.${item.key}`) }}</span>
          <span
            class="inline-block size-1.5 justify-self-end rounded-full"
            :class="activeSection === item.id ? 'bg-primary' : 'bg-transparent'"
          />
        </button>
      </div>

      <!-- Links -->
      <div class="border-default mt-auto border-t pt-5">
        <div class="text-2xs tracking-14 text-dimmed mb-1 font-mono uppercase">
          {{ $t('sidebar.links') }}
        </div>
        <a
          v-for="lk in links"
          :key="lk.label"
          :href="lk.href"
          :target="lk.href.startsWith('mailto') ? undefined : '_blank'"
          rel="noreferrer"
          class="text-default hover:text-primary flex justify-between py-1 text-sm no-underline
            transition-colors"
          @click="isOpen = false"
        >
          <span>{{ lk.label }}</span>
          <span class="text-xs">↗</span>
        </a>
      </div>
    </nav>
  </Transition>
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
  { id: 'web3', key: 'web3', num: '05' },
  { id: 'homelab', key: 'homelab', num: '06' },
  { id: 'vault', key: 'ai', num: '07' },
  { id: 'contact', key: 'contact', num: '08' },
]

const links = [
  { label: 'Email', href: 'mailto:edwinchanjy@hotmail.com' },
  { label: 'GitHub', href: 'https://github.com/edwinchanjy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jia-yu-chan-35a2671b1/' },
]

const isOpen = ref(false)

function navigate(id: string) {
  isOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
