import axios from "axios";

const token = localStorage.getItem('token')

export async function getcharacterApi() {
    const response = await axios.get('http://localhost:5057/api/ZestAuth/getcharacters', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    return response
}