import { boot } from "quasar/wrappers"
import { createPinia } from "pinia"
import { usePostStore } from "src/stores/posts"

const pinia = createPinia()
export default boot(({ app }) => {
  app.use(pinia)
  const postStore = usePostStore()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.PostStore = postStore
})

export { pinia }
