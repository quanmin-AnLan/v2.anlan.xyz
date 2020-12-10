import { createApp } from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './less/main.less'
import './element-variables.scss'
createApp(app).use(store).use(router).use(ElementPlus, { locale }).mount('#app')
