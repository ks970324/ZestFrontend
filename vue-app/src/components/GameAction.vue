<script setup>
import { useGameStore } from '../stores/game'
const game = useGameStore()

const attack = async () => {
  const result = await game.attack()
}



</script>

<template>
  <div class="buttons">
    <div class="AttackButton" id="AttackButton">
      <button @click="attack()">Attack</button>
    </div>
    <div class="MoveButton" id="MoveButton">
      <button>Finish Move</button>
    </div>
  </div>

</template>

<style scoped>
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.buttons button {
  font-family: "Press Start 2P", sans-serif;
  font-size: 16px;
  padding: 10px;
  background-color: #ffce3c;
  cursor: pointer;
  border: white 3px solid;
  transition: top 0.1s ease;
  position: relative;

}

.buttons button:hover {
  background-color: #ff9600;
}

.buttons button:active {
  top: 3px; /* 向下移動 3px */
}

</style>