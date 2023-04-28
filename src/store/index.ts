import type { App } from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {

    },
    modules: {

    },
    
})


export function initStore(app: App<Element>) {
    app.use(store)
}