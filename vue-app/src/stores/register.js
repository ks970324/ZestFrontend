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
                if (!this.email || !this.password || !this.characterspath) {
                    return this.submitError = true
                }

                if (this.checkpassword === false || this.emailExists === true) {
                    return this.submitError = true
                }


                const response = await registerApi(this.email, this.password, this.characterspath)
                console.log("register response:", response);

                const data = response.data

                if (data.status === true) {
                    return true
                }

            } catch (err) {
                console.log('Register failed')
            }
        }
    }
})