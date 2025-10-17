import axios from "axios";

export async function registerApi(email, password, characterspath) {
    const response = await axios.post('http://localhost:5057/api/register/Add', {
        email,
        password,
        characterspath
    })
    return response
}