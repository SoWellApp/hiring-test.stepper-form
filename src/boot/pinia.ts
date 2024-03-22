import { boot } from "quasar/wrappers"
import { createPinia } from "pinia"
import { useUserStore } from "src/stores/user-store"

const pinia = createPinia()

export default boot(({ app }) => {
  app.use(pinia)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.UserStore = useUserStore()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log("===== userstore", window.UserStore)
})

export { pinia }
