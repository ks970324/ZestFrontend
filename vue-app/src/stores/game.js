import { defineStore } from 'pinia'
import { updatebluepos } from "../services/updatebluepos.js";
import { newgame } from "../services/newgame.js";
import { attack } from "../services/attack.js";

export const useGameStore = defineStore('game', {
    state: () => ({
        Bluehealth: 10,
        Redhealth: 10,
        Gameresult: '',
        CurrentRound: localStorage.getItem('CurrentRound'),
        BluePosition: localStorage.getItem('BluePos')
            ? JSON.parse(localStorage.getItem('BluePos'))
            : { x: 1, y: 1 },
        RedPosition: localStorage.getItem('RedPos')
            ? JSON.parse(localStorage.getItem('RedPos'))
            : { x: 1, y: 1 },
        Hit:'',
    }),
    actions: {
        async updateblueposition() {
            try {
                const data = await updatebluepos(this.BluePosition, this.RedPosition)
                this.BluePosition = data.bluePosition;
                this.RedPosition = data.redPosition;
                localStorage.setItem('BluePos', JSON.stringify(this.BluePosition))
                localStorage.setItem('RedPos', JSON.stringify(this.RedPosition))
                return data
            } catch (error) {
                console.error('updatebluepos failed', error)
            }
        },

        async newgame() {
            try{
                const data = await newgame()
                this.CurrentRound = data.currentRound
                localStorage.setItem('CurrentRound', this.CurrentRound)
                return data
            } catch (error) {
                console.error('newgame failed', error)
            }

        },

        async attack() {
            const data = await attack(this.BluePosition, this.RedPosition,this.CurrentRound)
            this.Hit = data.hit
            return data
        },


    }
})