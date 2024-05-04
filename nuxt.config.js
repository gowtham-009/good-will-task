// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:'good-will',
      script:[{src:"./node_modules/preline/dist/preline.js"}],
      link:  [{rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", integrity:"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", crossorigin:"anonymous" ,referrerpolicy:
      "no-referrer"}]
    }
  },
  plugins: ["~/plugins/preline.client.ts"],
 
})
