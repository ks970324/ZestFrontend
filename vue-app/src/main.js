import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

import { useAuthStore } from './stores/auth'
import axios from 'axios'
const auth = useAuthStore()
const token = localStorage.getItem('token')
if (token) {
    auth.token = token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


app.use(router)

app.mount('#app')

