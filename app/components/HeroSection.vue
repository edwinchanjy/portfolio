<template>
  <header
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20"
  >
    <!-- Background layers -->
    <div class="bg-hero-pattern absolute inset-0 z-0 opacity-10 dark:opacity-20"></div>
    <div
      class="bg-primary/20 dark:bg-primary/10 absolute top-1/2 left-1/2 z-0 h-150 w-150
        -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
    ></div>
    <div
      class="bg-neon-purple/20 dark:bg-neon-purple/10 absolute top-1/4 right-0 z-0 h-100 w-100
        rounded-full blur-[100px]"
    ></div>

    <!-- Main content -->
    <div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
      <div class="mb-8 animate-bounce">
        <div
          class="border-primary/30 bg-surface-light shadow-primary/30 dark:bg-surface-dark mx-auto
            flex h-20 w-20 items-center justify-center rounded-2xl border shadow-lg"
        >
          <svg class="text-primary h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M2.273 13.565L10.3 22l1.643-2.614H19.7l2.027-2.614L10.3 2.068 2.273 13.565zm2.748-1.57h10.316L10.3 4.962 5.021 11.995z"
            ></path>
            <path d="M7.746 13.565l5.051 5.822h6.903l-4.708-5.822H7.746z"></path>
          </svg>
        </div>
      </div>

      <h2 class="font-display text-primary mb-4 text-lg tracking-widest md:text-xl">
        THE CODING ADVENTURES OF
      </h2>

      <h1
        class="glitch-text mb-6 font-sans text-6xl font-bold text-gray-900 md:text-8xl lg:text-9xl
          dark:text-white"
        data-text="EDWIN CHAN"
      >
        EDWIN CHAN
      </h1>

      <div
        class="border-neon-purple/50 bg-neon-purple/10 mb-8 inline-block rounded-full border px-6
          py-2 backdrop-blur-sm"
      >
        <span class="text-neon-purple font-mono font-semibold tracking-wider">
          FRONTEND ARCHITECT &amp; HOMELAB ENTHUSIAST
        </span>
      </div>

      <p
        class="mx-auto mb-12 max-w-2xl text-lg font-light text-gray-600 md:text-xl
          dark:text-gray-300"
      >
        Crafting pixel-perfect user experiences with
        <span class="text-primary font-bold">Nuxt.js</span>
        and building robust digital fortresses in the basement.
      </p>

      <a
        href="#lab"
        class="group border-primary bg-surface-dark hover:bg-primary focus:ring-primary
          dark:bg-surface-dark relative inline-flex items-center justify-center border-2 px-12 py-4
          font-mono font-bold text-white transition-all duration-200 focus:ring-2
          focus:ring-offset-2 focus:outline-none"
      >
        <span
          class="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-linear-to-b from-transparent
            via-transparent to-gray-700 opacity-30"
        ></span>
        <span class="relative flex items-center gap-3">
          ENTER THE LAB
          <span class="material-icons transition-transform group-hover:translate-x-1">
            terminal
          </span>
        </span>
      </a>

      <div class="mt-16 flex items-center justify-center gap-4">
        <span class="material-icons text-primary animate-pulse text-sm">diamond</span>
        <div class="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div class="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
    </div>

    <!-- Side decoration -->
    <div
      class="pointer-events-none absolute top-1/2 right-0 hidden h-96 w-32 -translate-y-1/2
        opacity-30 xl:block"
    >
      <div class="relative h-full w-full border-l border-gray-700">
        <div
          class="font-display absolute top-1/2 -right-4 -translate-y-1/2 -rotate-90 transform
            text-6xl whitespace-nowrap text-gray-800 opacity-50 dark:text-gray-800"
        >
          LEVEL UP
        </div>
        <span
          class="material-icons absolute top-1/2 -left-4 -translate-y-1/2 text-4xl text-gray-400"
        >
          chevron_right
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -1px 0 #b829ea;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -1px 0 #00dc82;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(11px, 9999px, 89px, 0);
  }
  100% {
    clip: rect(44px, 9999px, 12px, 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    clip: rect(69px, 9999px, 21px, 0);
  }
  100% {
    clip: rect(9px, 9999px, 78px, 0);
  }
}
</style>
