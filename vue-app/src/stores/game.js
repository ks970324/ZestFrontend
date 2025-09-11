import { defineStore } from 'pinia'
import { updatebluepos } from "../services/updatebluepos.js";
import { newgame } from "../services/newgame.js";
import { blueattack } from "../services/blueattack.js";
import { redattack } from "../services/redattack.js";

export const useGameStore = defineStore('game', {
    state: () => ({
        BlueHP: 10,
        RedHP: 10,
        Gameresult: '',
        CurrentRound: localStorage.getItem('CurrentRound'),
        BluePosition: localStorage.getItem('BluePos')
            ? JSON.parse(localStorage.getItem('BluePos'))
            : { x: 1, y: 1 },
        RedPosition: localStorage.getItem('RedPos')
            ? JSON.parse(localStorage.getItem('RedPos'))
            : { x: 1, y: 1 },
        Hit:'',
        Attacker:'',
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
                console.log(data)
                this.CurrentRound = data.currentRound
                this.BluePosition = data.bluePosition
                this.RedPosition = data.redPosition
                this.Attacker = data.attacker
                localStorage.setItem('BluePos', JSON.stringify(this.BluePosition))
                localStorage.setItem('RedPos', JSON.stringify(this.RedPosition))
                localStorage.setItem('CurrentRound', this.CurrentRound)
                return data
            } catch (error) {
                console.error('newgame failed', error)
            }

        },

        async blueattack() {
            try {
                const data = await blueattack(this.BluePosition, this.RedPosition, this.CurrentRound)
                console.log(data)
                this.Hit = data.hit
                this.RedPosition = data.redPosition
                this.BluePosition = data.bluePosition
                localStorage.setItem('RedPos', JSON.stringify(this.RedPosition))
                this.CurrentRound = data.currentRound
                localStorage.setItem('CurrentRound', this.CurrentRound)
                this.Attacker = data.attacker
                this.BlueHP = data.blueHP
                this.RedHP = data.redHP
                this.Gameresult = data.gameResult
                return data
            } catch (error) {
                console.error('blue side attack failed', error)
            }
        },

        async redattack() {
            try {
                const data = await redattack(this.BluePosition, this.RedPosition, this.CurrentRound)
                console.log(data)
                this.Hit = data.hit
                this.BluePosition = data.bluePosition
                this.RedPosition = data.redPosition
                localStorage.setItem('BluePos', JSON.stringify(this.BluePosition))
                this.CurrentRound = data.currentRound
                localStorage.setItem('CurrentRound', this.CurrentRound)
                this.Attacker = data.attacker
                this.BlueHP = data.blueHP
                this.RedHP = data.redHP
                this.Gameresult = data.gameResult
                return data
            } catch (error) {
                console.error('red side attack failed', error)
            }
        },



    }
})