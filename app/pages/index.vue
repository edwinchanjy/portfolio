<template>
  <div class="bg-default min-h-screen lg:flex lg:items-start">
    <AppMobileNav :active-section="activeSection" />
    <AppSidebar :active-section="activeSection" />

    <main class="bg-default min-w-0 flex-1 overflow-x-hidden pt-14 lg:pt-0">
      <div class="px-5 pt-10 pb-16 sm:px-10 sm:py-12 lg:px-12 lg:pt-15 lg:pb-25 xl:px-16">
        <HomeHero />
        <HomeAbout />
        <HomeExperience />
        <HomeStack />
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
useHead({ title: 'Edwin Chan Jia Yu — Senior Frontend Developer' })

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
