import { boot } from "quasar/wrappers"
import { createPinia } from "pinia"

import { useUserStore } from "src/stores/user.store"

const pinia = createPinia()
export default boot(({ app }) => {

    app.use(pinia)
    const userStore = useUserStore()
    if (process.env.E2E_TEST) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.UserStore = userStore
    }
})

export { pinia }