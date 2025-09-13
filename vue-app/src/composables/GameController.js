
import { useGameStore } from '../stores/game'


export async function startGame() {
    const game = useGameStore()
    const result = await game.newgame()
    return result
}

