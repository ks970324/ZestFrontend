import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore('game', {
    state: () => ({
        Playerhealth: 10,
        Enemyhealth: 10,
        Gameresult: '',
        Currentround: '',
    }),
    actions: {
        async gethealth() {
            const response = await axios.get('http://localhost:5057/api/Game/gethealth')
            this.health = response.data
        },


    }
})