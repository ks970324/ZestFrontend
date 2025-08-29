import axios from "axios";

export async function getround() {
    const response = await axios.get('http://localhost:5057/api/Game/getround')
    return response.data
}