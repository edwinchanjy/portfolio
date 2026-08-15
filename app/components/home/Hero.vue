<template>
  <section id="intro" class="fade-up mb-24 scroll-mt-8">
    <!-- Name -->
    <h1
      ref="nameRef"
      class="font-display text-highlighted tracking-display mb-5 leading-none font-bold select-none"
      style="font-size: clamp(56px, 6vw, 96px)"
    >
      {{ $t('common.name') }}
    </h1>

    <!-- Cycling headline -->
    <div class="relative mb-4 min-h-[2em] overflow-hidden">
      <span
        :key="currentIndex"
        class="font-display text-primary absolute inset-0 block font-medium tracking-tight"
        :class="[headlineAnimClass]"
        style="font-size: clamp(18px, 2.2vw, 24px)"
      >
        {{ headlines[currentIndex] }}
      </span>
    </div>

    <!-- Lede -->
    <p class="fade-up text-default mb-7 max-w-xl text-lg leading-relaxed">
      {{ $t('hero.lede') }}
    </p>

    <!-- CTAs -->
    <div class="fade-up flex flex-wrap gap-2.5">
      <a
        href="mailto:edwinchanjy@hotmail.com"
        class="border-primary/30 bg-primary/10 text-primary hover:bg-primary/18 inline-flex
          cursor-pointer items-center gap-1.5 rounded-md border px-3.5 py-1.5 font-sans text-sm
          no-underline transition-colors"
      >
        {{ $t('hero.ctaEmail') }}
      </a>
      <a
        href="/edwin-chan-jia-yu-resume.pdf"
        download=""
        class="border-accented bg-muted text-default hover:border-accented hover:bg-elevated
          hover:text-highlighted inline-flex cursor-pointer items-center gap-1.5 rounded-md border
          px-3.5 py-1.5 font-sans text-sm no-underline transition-colors"
      >
        {{ $t('hero.ctaResume') }}
      </a>
      <a
        href="https://github.com/edwinchanjy"
        target="_blank"
        rel="noreferrer"
        class="border-accented bg-muted text-default hover:border-accented hover:bg-elevated
          hover:text-highlighted inline-flex cursor-pointer items-center gap-1.5 rounded-md border
          px-3.5 py-1.5 font-sans text-sm no-underline transition-colors"
      >
        {{ $t('hero.ctaGithub') }}
      </a>
      <a
        href="https://www.linkedin.com/in/jia-yu-chan-35a2671b1/"
        target="_blank"
        rel="noreferrer"
        class="border-accented bg-muted text-default hover:border-accented hover:bg-elevated
          hover:text-highlighted inline-flex cursor-pointer items-center gap-1.5 rounded-md border
          px-3.5 py-1.5 font-sans text-sm no-underline transition-colors"
      >
        {{ $t('hero.ctaLinkedin') }}
      </a>
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
const headlineAnimClass = ref('headline-slide-in')
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    headlineAnimClass.value = 'headline-slide-out'
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % headlines.value.length
      headlineAnimClass.value = 'headline-slide-in'
    }, 500)
  }, 3400)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
