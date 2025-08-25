// 📁 src/services/authApi.js
import axios from 'axios'

export async function loginApi(email, password, remember) {
    return axios.post('http://localhost:5057/api/ZestAuth/Login', {
        Email :email,
        Password :password,
        Remember :remember
    })
}
