// 📁 src/stores/auth.js
import { defineStore } from 'pinia'
import { loginApi } from '../services/authApi'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: localStorage.getItem('user') || null,
        loginError: null,
        remember: localStorage.getItem('remember') || false
    }),

    actions: {
        async login(email, password,remember) {
            try {
                const { data } = await loginApi(email,password,remember)

                if (data.status) {
                    this.user = { email }
                    this.loginError = null
                    this.token = data.token
                    this.remember = data.remember

                    // save token
                    localStorage.setItem('token', data.token)

                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`

                    // save remember
                    localStorage.setItem('remember', data.remember)

                    // save user
                    localStorage.setItem('user', JSON.stringify(this.user))

                    return data

                } else {
                    this.loginError = 'Wrong email or password'
                    return data
                }
            } catch (err) {
                this.loginError = 'Network or server error'
                return false
            }
        },
    },
})
