import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";//antd组件自动导入相关依赖
import AutoImport from "unplugin-auto-import/vite"//vue3.0自动导入相关配置，配置后无需import就可使用ref等
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),// 路径别名
      'vue': 'vue/dist/vue.esm-bundler.js'//配置支持const Home = { template: '<div>Home</div>' }语法
    }
  },

})
