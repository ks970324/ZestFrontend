import axios from "axios";

export async function attack(BluePosition, RedPosition, CurrentRound) {
    const response = await axios.post(
        'http://localhost:5057/api/Game/attack',
        {
            BluePosition,
            RedPosition,
            CurrentRound
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
    return response.data
}
