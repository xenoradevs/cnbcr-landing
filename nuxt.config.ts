// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts'
  ],

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  compatibilityDate: '2024-07-26'
})