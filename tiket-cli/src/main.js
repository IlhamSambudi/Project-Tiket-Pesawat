import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Adminuser from './components/Adminuser.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/login', name: "Login", component: Login },
        { path: '/register', name: "Register", component: Register },
        { path: '/adminuser', name: "Adminuser", component: Adminuser },

    ],
    base: '/'
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount("#app")