import axios from "axios";

export async function updatebluepos(BluePosition, RedPosition) {
    const response = await axios.post('http://localhost:5057/api/Game/getbluepos',{
        BluePosition,
        RedPosition
    })
    return response.data
}