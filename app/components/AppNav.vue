<template>
  <nav
    class="bg-background-light/90 dark:bg-background-dark/90 fixed z-50 w-full border-b
      border-gray-200 backdrop-blur-md dark:border-gray-800"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="from-primary to-neon-blue font-display bg-linear-to-r bg-clip-text text-2xl
            text-transparent"
        >
          <span class="text-gray-800 dark:text-white">&lt;</span>
          DEV
          <span class="text-gray-800 dark:text-white">/&gt;</span>
        </NuxtLink>

        <div class="hidden items-center space-x-8 font-mono md:flex">
          <a
            href="#skills"
            class="hover:text-primary dark:hover:text-primary text-gray-600 transition-colors
              dark:text-gray-300"
          >
            SKILLS
          </a>
          <a
            href="#lab"
            class="hover:text-primary dark:hover:text-primary text-gray-600 transition-colors
              dark:text-gray-300"
          >
            PROJECTS
          </a>
          <a
            href="#lab"
            class="from-neon-purple to-neon-blue hover:shadow-neon-blue/50 transform rounded
              bg-linear-to-r px-4 py-2 font-bold text-white transition-all hover:-translate-y-0.5
              hover:shadow-lg"
          >
            THE LAB 🧪
          </a>
          <button
            class="hover:text-primary text-gray-600 transition-colors dark:text-gray-300"
            @click="toggleColorMode"
          >
            <span class="material-icons">
              {{ colorMode.value === 'dark' ? 'light_mode' : 'dark_mode' }}
            </span>
          </button>
        </div>

        <div class="flex items-center gap-2 md:hidden">
          <button
            class="hover:text-primary text-gray-600 transition-colors dark:text-gray-300"
            @click="toggleColorMode"
          >
            <span class="material-icons">
              {{ colorMode.value === 'dark' ? 'light_mode' : 'dark_mode' }}
            </span>
          </button>
          <button
            class="text-gray-600 focus:outline-none dark:text-gray-300 dark:hover:text-white"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="material-icons">menu</span>
          </button>
        </div>
      </div>

      <div
        v-if="mobileMenuOpen"
        class="flex flex-col gap-4 border-t border-gray-200 py-4 font-mono md:hidden
          dark:border-gray-800"
      >
        <a
          href="#skills"
          class="hover:text-primary text-gray-600 transition-colors dark:text-gray-300"
          @click="mobileMenuOpen = false"
        >
          SKILLS
        </a>
        <a
          href="#lab"
          class="hover:text-primary text-gray-600 transition-colors dark:text-gray-300"
          @click="mobileMenuOpen = false"
        >
          PROJECTS
        </a>
        <a
          href="#lab"
          class="from-neon-purple to-neon-blue rounded bg-linear-to-r px-4 py-2 text-center
            font-bold text-white"
          @click="mobileMenuOpen = false"
        >
          THE LAB 🧪
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const mobileMenuOpen = ref(false)

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
