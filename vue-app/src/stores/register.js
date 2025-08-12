import {defineStore} from "pinia";
import { registerApi } from "../services/registerapi";

export const useRegisterStore = defineStore('register', {
    state: () => ({
        email: '',
        password: '',
        characterspath: '',
        loading: false
    }),

    actions: {
        async register() {
            console.log('register action start')
            try {
                const data = await registerApi(this.email, this.password, this.characterspath)

                console.log('後端回傳 data:', data)

                if (data.status) {
                    this.loading = true
                    return data
                }

            } catch (err) {
                console.log('Register failed due to:', err)
            }
        }
    }
})