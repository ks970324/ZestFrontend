// 📁 src/services/authApi.js
import axios from 'axios'

export async function loginApi(email, password) {
    return axios.post('http://localhost:5057/api/Auth/Login', {
        Email :email,
        Password :password,
    })
}
