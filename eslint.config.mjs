import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

import withNuxt from './.nuxt/eslint.config.mjs'

// Run `npx @eslint/config-inspector@latest` to inspect the resolved config interactively
export default withNuxt([eslintPluginPrettierRecommended]).override('nuxt/javascript', {
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
    'require-await': 'error',
  },
})
