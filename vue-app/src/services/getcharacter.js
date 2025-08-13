import axios from "axios";

export async function getcharacterApi(email, password) {
    const response = await axios.post('http://localhost:5057/api/', {
        email,
        password
    })
    return response
}