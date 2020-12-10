import { createApp } from 'vue'
import App from './App.vue'
import './less/main.less'

import router from './router'
import store from './store'

import installElement from './plugins/element'
import logonComponents from './components/config'

const app = createApp(App)

installElement(app)
logonComponents(app)

app.use(store).use(router).mount('#app')
