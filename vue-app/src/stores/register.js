import {defineStore} from "pinia";
import { registerApi } from "../services/registerapi";

export const useRegisterStore = defineStore('register', {
    state: () => ({
        email: '',
        password: '',
        characterspath: '',
        submitError: false,
        emailExists: undefined,
        checkpassword: undefined
    }),

    actions: {
        async register() {
            try {
                console.log('前端傳送資料:', this.email, this.password, this.characterspath,this.emailExists,this.checkpassword)
                if (!this.email || !this.password || !this.characterspath) {
                    return this.submitError = true
                }

                if (this.checkpassword === false || this.emailExists === true) {
                    return this.submitError = true
                }


                const response = await registerApi(this.email, this.password, this.characterspath)

                console.log('後端回傳 data:', response.data)
                console.log('後端回傳 status:', response.status)

                if (response.status) {
                    return response.data
                }

            } catch (err) {
                console.log('Register failed due to:', err)
            }
        }
    }
})