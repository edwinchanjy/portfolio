<template>
  <section id="intro" class="fade-up mb-24 scroll-mt-8">
    <!-- Name -->
    <h1
      ref="nameRef"
      class="font-display text-highlighted tracking-display mb-5 leading-none font-bold select-none"
      style="font-size: clamp(44px, 7.6vw, 96px)"
    >
      {{ $t('common.name') }}
    </h1>

    <!-- Cycling headline -->
    <div class="relative mb-4 min-h-[2em] overflow-hidden">
      <Transition name="headline-slide">
        <span
          :key="currentIndex"
          class="font-display text-primary absolute inset-0 block font-medium tracking-tight"
          style="font-size: clamp(18px, 2.2vw, 24px)"
        >
          {{ headlines[currentIndex] }}
        </span>
      </Transition>
    </div>

    <!-- Lede -->
    <p class="fade-up text-default mb-8 max-w-xl text-lg leading-relaxed">
      {{ $t('hero.lede') }}
    </p>

    <!-- CTAs -->
    <div class="fade-up flex flex-wrap gap-3">
      <AppPillLink
        href="mailto:edwinchanjy@hotmail.com"
        :label="$t('hero.ctaEmail')"
        icon="up-right"
        variant="accent"
      />
      <AppPillLink
        href="/edwin-chan-jia-yu-resume.pdf"
        :label="$t('sidebar.linkResume')"
        icon="down"
        variant="ghost"
        download
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const headlines = computed(() => [
  $t('hero.headline1'),
  $t('hero.headline2'),
  $t('hero.headline3'),
  $t('hero.headline4'),
])

const currentIndex = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % headlines.value.length
  }, 3400)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
