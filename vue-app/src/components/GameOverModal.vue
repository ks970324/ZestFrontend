<script setup>
import { ref, watch } from 'vue'
import {useGameStore} from "../stores/game.js";
import { storeToRefs} from "pinia";

import { startGame } from '../composables/GameController'
const game = useGameStore()
const { Gameresult } = storeToRefs(game)

const isGameResultOpen = ref(false)

watch(() => Gameresult.value, (newResult) => {
  if (newResult) {
    isGameResultOpen.value = true
  }
})

function toggleResult() {
  isGameResultOpen.value = !isGameResultOpen.value
}

</script>

<template>
    <div class="game-result" v-if="isGameResultOpen">
      <div class="game-result-content">
        <div class="game-result-text" >
          <h1>Game Result</h1>
          <p v-if="Gameresult === 'red'">Sorry, You Lost.</p>
          <p v-if="Gameresult === 'blue'">Congratulations, You Won!</p>
        </div>
        <span class="Btn" @click="startGame(); toggleResult();">Try it again!</span>
      </div>
    </div>
</template>

<style scoped>
.game-result {
  position: fixed;
  z-index: 1000;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
}

.game-result-content {
  text-align: center;
  background-color: #000000;
  margin: 20% auto;
  width: 500px;
  height: 150px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  border: #ffce3c 6px dashed;
}

.game-result-text h1 {
  color: #ffce3c;
  margin-top:-10px;
  margin-bottom: 30px;
}

.game-result-text {
  margin-bottom: 50px;
  color:white;
  font-size: 18px;
}

.Btn {
  font-size: 18px;
  cursor: pointer;
  color: #000000;
  background-color: #ffce3c;
  padding: 10px;
}

.Btn:hover {
  background-color: #ff9600;
}
</style>