<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
const toaster = { position: 'bottom-center' } as const

const toast = useToast()

onMounted(() => {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success',
    duration: 0,
  })
})
</script>
