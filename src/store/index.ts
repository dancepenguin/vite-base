import type { App } from 'vue'
import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{

        }
    },
    getters:{},
    mutations:{},
    actions:{},
    modules:{},
})


export function initStore(app: App<Element>) {
    app.use(store)
}