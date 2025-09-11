import axios from "axios";

export async function blueattack(BluePosition, RedPosition, CurrentRound) {
    const response = await axios.post(
        'http://localhost:5057/api/Game/blueattack',
        {
            BluePosition,
            RedPosition,
            CurrentRound
        }
    )
    return response.data
}
