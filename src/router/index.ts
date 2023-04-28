import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
//404页面
const classA = `width:100vw;height:100vh;display:flex;align-items:center;justify-content: center;flex-direction:column;`
const classB = `font-size:80px;font-weight:bold`
const classC = `font-size:20px;`
const notFound = {
    template:
        `<div style="${classA}">
            <div style="${classB}">404</div>
            <div style="${classC}">您访问的页面不存在</div>
        </div>`
}


const routes: RouteRecordRaw[] = [
    { path: '/login', component: () => import('@/views/login/Login.vue') },
    { path: '/:pathMatch*', component: notFound },//404页面
]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export function initRouter(app: App<Element>) {
    app.use(router)
}