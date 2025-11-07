// 📁 src/stores/auth.js
import { defineStore } from 'pinia'
import { loginApi } from '../services/authapi'
import { getcharacterApi } from '../services/getcharacter'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: localStorage.getItem('user') || null,
        loginError: null,
        remember: localStorage.getItem('remember') || false,
        character: null,
        showLoginModal: false
    }),

    actions: {
        async login(email, password) {
            try {
                const { data } = await loginApi(email,password)

                if (data.status) {
                    this.user = { email }
                    this.loginError = null
                    this.token = data.token

                    // save token
                    localStorage.setItem('token', data.token)

                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`

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

        async getcharacter() {
            try {
                const response = await getcharacterApi()
                const data = response.data
                this.character = data.characterspath
                return data.characterspath
            } catch (err) {
                if (err.response.status === 401) {
                this.showLoginModal = true
                }
                this.loginError = 'Network or server error'
                return false
            }
        },




    },

})
