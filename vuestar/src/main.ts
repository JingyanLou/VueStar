import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css' // 导入 Tailwind CSS

const app = createApp(App)

app.use(router)

app.mount('#app')
