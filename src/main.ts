import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initRouter } from './router'
import { px2rem } from './utils/dom'
import { getImgUrl } from './utils/img'

const app = createApp(App)
// 扩充声明文件
declare module "vue" {
    export interface ComponentCustomProperties {
        $px2rem: Function;
        $getImgUrl: Function
    }
}
//全局挂载
app.config.globalProperties.$px2rem = px2rem
app.config.globalProperties.$getImgUrl = getImgUrl

//初始化vuex


//初始化路由
initRouter(app)



app.mount('#app')
