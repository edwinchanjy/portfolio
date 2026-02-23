<template>
  <footer class="dark:bg-surface-dark border-t border-gray-200 bg-white py-12 dark:border-gray-800">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 md:flex-row">
      <div class="mb-4 md:mb-0">
        <span class="font-display text-xl text-gray-900 dark:text-white">EDWIN CHAN</span>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Frontend Developer • Homelabber</p>
      </div>
      <div class="flex gap-6">
        <a href="#" class="hover:text-primary text-gray-500 transition-colors dark:text-gray-400">
          GitHub
        </a>
        <a href="#" class="hover:text-primary text-gray-500 transition-colors dark:text-gray-400">
          LinkedIn
        </a>
        <a href="#" class="hover:text-primary text-gray-500 transition-colors dark:text-gray-400">
          Twitter
        </a>
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-7xl border-t border-gray-200 px-4 pt-8 dark:border-gray-800">
      <div
        class="bg-background-light dark:bg-background-dark flex flex-col items-center
          justify-between gap-4 rounded-lg p-4 md:flex-row"
      >
        <div>
          <h4 class="text-sm font-bold text-gray-900 uppercase dark:text-white">
            We Value Your Code
          </h4>
          <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">
            This website uses 0 cookies because I haven't implemented them yet. It's just HTML &amp;
            Tailwind.
          </p>
        </div>
        <div class="flex gap-4">
          <button
            class="bg-primary rounded px-4 py-2 text-xs font-bold text-black transition-opacity
              hover:opacity-90"
          >
            ACKNOWLEDGE
          </button>
          <button
            class="rounded border border-gray-400 px-4 py-2 text-xs font-bold text-gray-900
              transition-colors hover:bg-gray-200 dark:border-gray-600 dark:text-white
              dark:hover:bg-gray-700"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
