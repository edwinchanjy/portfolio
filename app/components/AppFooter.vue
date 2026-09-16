<template>
  <div
    class="border-default text-dimmed mt-2 flex flex-wrap justify-between gap-2 border-t pt-6
      font-mono text-xs tracking-wider"
  >
    <span>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</span>
  </div>
</template>
