import axios from "axios";

export async function checkApi (email) {
    return axios.post('http://localhost:5057/api/', {
        email
}
    )}