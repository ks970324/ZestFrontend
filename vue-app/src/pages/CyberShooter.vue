<script setup>

import Battlefield from "../components/Battlefield.vue";
import HealthBar from "../components/HealthBar.vue";
import GameRule from "../components/GameRule.vue";
import GameAction from "../components/GameAction.vue";
import GameOverModal from "../components/GameOverModal.vue";
import {ref} from "vue";

const gamerule = ref()

function openGameRule() {
  gamerule.value.checkRule()
}

</script>

<template>
  <div class="cyber-shooter">
    <div class="header">
      <div class="exit">
        <a href="/gamelobby"><img src="/material/door.png"></a>
      </div>
      <div class="question" @click="openGameRule()"><img src="/material/question-white.png"></div>
    </div>
    <div class="title"><h1>Cyber Shooter</h1></div>
    <div class="battlefield">
      <HealthBar />
      <Battlefield />
      <GameRule ref="gamerule"/>
      <GameAction />
      <GameOverModal />


    </div>

  </div>
</template>

<style scoped>
.cyber-shooter {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Press Start 2P', sans-serif;
  background-color: #1e1e1e;
  height: 100vh;
  width: 100%;
}

.header {
  display: flex;
  width:98%;
  padding:10px;
  justify-content: space-between; /* 左右排列 */
}

.question, .exit{
  cursor: pointer;
}
.exit img{
  height:35px;
}

.title {
  color: white;
  font-size: 24px;
  justify-content: center;
}
</style>