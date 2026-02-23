// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Edwin Chan - Portfolio',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Welcome to my portfolio! I am a passionate software developer with expertise in web development, mobile app development, and cloud computing. Explore my projects, skills, and experience to see how I can contribute to your next project.',
        },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  eslint: {
    config: {
      tooling: true,
      stylistic: true,
      typescript: {
        strict: true,
      },
    },
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'cn', file: 'cn.json' },
    ],
    langDir: 'locales',
    defaultLocale: 'en',
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n', '@pinia/nuxt'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@': ['.'],
          '@/*': ['./*'],
        },
      },
    },
  },
})
