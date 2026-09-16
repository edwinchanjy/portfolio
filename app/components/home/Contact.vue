<template>
  <section id="contact" class="fade-up mb-12 scroll-mt-8">
    <AppSectionHeader num="08" label-key="nav.contact" />

    <h3
      class="font-display text-highlighted text-section-h3 sm:text-section-h3 mb-8 max-w-[20ch]
        leading-none font-bold tracking-tight"
    >
      {{ $t('contact.heading') }}
    </h3>

    <div class="mb-9 flex flex-wrap items-center gap-x-7 gap-y-3.5">
      <AppPillLink
        href="mailto:edwinchanjy@hotmail.com"
        label="edwinchanjy@hotmail.com"
        icon="up-right"
        variant="accent"
      />
      <a
        href="https://github.com/edwinchanjy"
        target="_blank"
        rel="noreferrer"
        class="text-default hover:text-primary inline-flex items-center gap-2 text-base no-underline
          transition-colors"
      >
        <UIcon name="i-local-github" class="size-4 opacity-70" />
        github.com/edwinchanjy
      </a>
      <a
        href="https://www.linkedin.com/in/jia-yu-chan-35a2671b1/"
        target="_blank"
        rel="noreferrer"
        class="text-default hover:text-primary inline-flex items-center gap-2 text-base no-underline
          transition-colors"
      >
        <UIcon name="i-local-linkedin" class="size-4 opacity-70" />
        /in/jia-yu-chan
      </a>
    </div>
  </section>
</template>
