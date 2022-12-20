export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-middleware', (to, from) => {
        if(process.client){
        localStorage.getItem('lang') 
        }
      },
      { global: true }
    )
  })