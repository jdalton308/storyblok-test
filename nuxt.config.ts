// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@storyblok/nuxt', {
      accessToken: 'Q1dvtnISVqu7CvdSzlElgQtt',
      apiOptions: {
        region: "us",
      },
    }]
  ],
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"]
    },
  }
});
