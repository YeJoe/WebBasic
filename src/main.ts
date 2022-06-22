import { createApp } from 'vue'
import App from './App.vue'

// 创建 Vue 实例
const app = createApp(App)

//引入Pinia
import {createPinia} from 'pinia'
// 创建 Pinia 实例
const pinia = createPinia()

/*全局axios 引入*/
import axios from './http/index'
import fetchJsonp from 'fetch-jsonp'
//全局使用axios
app.config.globalProperties.$axios = axios
//全局使用fetchJsonp
app.config.globalProperties.$fetchJsonp = fetchJsonp



// 挂载到 Vue 根实例
app.use(pinia)
app.mount('#app')
