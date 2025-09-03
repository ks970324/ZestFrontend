import axios from "axios";

export async function newgame(CurrentRound) {
    const response = await axios.post('http://localhost:5057/api/Game/newgame', CurrentRound)
    return response.data
}