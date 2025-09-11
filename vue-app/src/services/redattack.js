import axios from "axios";

export async function redattack(BluePosition, RedPosition, CurrentRound) {
    const response = await axios.post(
        'http://localhost:5057/api/Game/redattack',
        {
            BluePosition,
            RedPosition,
            CurrentRound
        }
    )
    return response.data
}
