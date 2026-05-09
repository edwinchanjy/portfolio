<template>
  <div class="bg-default min-h-screen">
    <!-- Mobile nav (< lg) -->
    <AppMobileNav :active-section="activeSection" />

    <!-- Sidebar (≥ lg) -->
    <AppSidebar :active-section="activeSection" />

    <!-- Main content -->
    <main class="bg-default overflow-x-hidden pt-13 lg:ml-63 lg:pt-0">
      <div class="px-5 pt-8 pb-16 sm:px-10 sm:py-12 lg:px-20 lg:pt-15 lg:pb-25">
        <HomeHero />
        <HomeAbout />
        <HomeExperience />
        <HomeStack />
        <!-- <HomeWeb3 /> -->
        <HomeProjects />
        <HomeHomelab />
        <HomeAiWorkflow />
        <HomeContact />
        <AppFooter />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Edwin Chan Jia Yu — Frontend Developer' })

const sectionIds = ['intro', 'about', 'exp', 'stack', 'projects', 'homelab', 'vault', 'contact']
const {
  activeSection,
  init: initScrollspy,
  destroy: destroyScrollspy,
} = useSectionScrollspy(sectionIds)
const { observe, disconnect } = useFadeUp()

onMounted(() => {
  initScrollspy()
  observe()
})

onUnmounted(() => {
  destroyScrollspy()
  disconnect()
})
</script>
