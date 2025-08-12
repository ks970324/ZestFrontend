import axios from "axios";

export async function checkemailapi(email) {
    const response = await axios.get('http://localhost:5057/api/register/checkemail', {
        params: { email }
    })
    return response.data
}
