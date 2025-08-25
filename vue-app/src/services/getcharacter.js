import axios from "axios";


export async function getcharacterApi() {
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:5057/api/ZestAuth/getcharacters', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response
}