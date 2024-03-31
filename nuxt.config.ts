// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/ui',
    'nuxt-vercel-analytics',
    'nuxt-aos',
    ],
    aos: {
      duration: 1000, // values from 0 to 3000, with step 50ms
      }
  
})
