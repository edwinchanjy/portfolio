<template>
  <section id="contact" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">08</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        Contact
      </span>
    </div>

    <h3 class="font-display text-highlighted mb-7 text-5xl leading-none font-bold tracking-tight">
      {{ $t('contact.heading') }}
    </h3>

    <!-- Links grid -->
    <div class="contact-grid mb-9 text-base">
      <template v-for="lk in links" :key="lk.labelKey">
        <span class="text-dimmed pt-0.5 text-xs">{{ $t(lk.labelKey) }}</span>
        <a
          :href="lk.href"
          :target="lk.href.startsWith('mailto') ? undefined : '_blank'"
          rel="noreferrer"
          class="hover:text-primary text-base no-underline transition-colors"
          :class="lk.accent ? 'text-primary' : 'text-highlighted'"
        >
          {{ lk.val }}
        </a>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = [
  {
    labelKey: 'contact.emailLabel',
    val: 'edwinchanjy@hotmail.com',
    href: 'mailto:edwinchanjy@hotmail.com',
    accent: true,
  },
  {
    labelKey: 'contact.githubLabel',
    val: 'github.com/edwinchanjy',
    href: 'https://github.com/edwinchanjy',
    accent: false,
  },
  {
    labelKey: 'contact.linkedinLabel',
    val: '/in/jia-yu-chan',
    href: 'https://www.linkedin.com/in/jia-yu-chan-35a2671b1/',
    accent: false,
  },
]
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 88px 1fr;
  row-gap: 14px;
}
</style>
