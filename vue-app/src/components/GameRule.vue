<script setup>
import { ref } from 'vue'

const isRuleOpen = ref(true)

function toggleRule() {
  isRuleOpen.value = !isRuleOpen.value
}

defineExpose({
  toggleRule
})

</script>

<template>
  <div class="game-rule" v-if="isRuleOpen">
    <div class="game-rule-content">
      <div class="game-rule-text" >
        <p><h1>Game rule</h1></p>
        <p>1. Use the arrow keys to move your character.</p>
        <p>2. Press the Enter key to perform actions (ending movement or attacking).</p>
        <p>3. Each player has five hearts of health. Reduce your opponent's hearts to zero to win.</p>
        <p>4. Damage rules for attacks:</p>
        <ul style="text-align: left;">
          <li>If the distance between players is 0–1 tile: deduct 1.5 hearts.</li>
          <li>If the distance is 2 tiles: deduct 1 heart.</li>
          <li>If the distance is 3–4 tiles: deduct 0.5 heart.</li>
        </ul>
      </div>
      <span class="startBtn" @click="toggleRule">Start Game</span>
    </div>
  </div>
</template>

<style scoped>

.game-rule {
  position: fixed; /* 固定在視窗 */
  z-index: 1000; /* 在最上層 */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

}

.game-rule-content {
  text-align: center;
  background-color: #000000;
  margin: 10% auto; /* 垂直間距＋置中 */
  width: 900px;
  height: auto;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  border: #ffce3c 5px dashed;
}

.game-rule-text h1 {
  color: #ffce3c;
  margin-top:-20px;
  margin-bottom: 30px;

}

.game-rule-text p , .game-rule-text ul{
  margin-bottom: 20px;
  line-height: 1.2;
}

.game-rule-text {
  margin-bottom: 50px;
  color:white;
}

.startBtn {
  font-size: 18px;
  cursor: pointer;
  color: #000000;
  background-color: #ffce3c;
  padding: 10px;
}

.startBtn:hover {
  background-color: #ff9600;
}

</style>