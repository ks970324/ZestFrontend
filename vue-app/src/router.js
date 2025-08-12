// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import GameLobby from './pages/GameLobby.vue'
import Register from './pages/Register.vue'
import CyberShooter from './pages/CyberShooter.vue'

const routes = [
    { path: '/', name: 'Home',component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/gamelobby', name: 'GameLobby', component: GameLobby },
    { path: '/register', name: 'Register', component: Register },
    { path: '/cybershooter', name: 'CyberShooter', component: CyberShooter },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
