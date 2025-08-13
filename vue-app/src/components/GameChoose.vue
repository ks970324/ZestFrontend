<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const hover = ref(false)
const router = useRouter()

function gamestart() {
  router.push('/cybershooter')
}


</script>

<template>
  <div class="game-choose">
    <div class="game-entry">
      <div class="game-light"  @mouseenter="hover = true" @mouseleave="hover = false">
        <img src="/material/light2.png"
             alt="game-entry"
             :class="{ zoom: hover }"
        >
        <div class="overlay" :class="{ show: hover }">
          <p>Game Start</p>
          <div class="game-card">
            <img src="/material/gamecard.png" alt="game-entry" @click="gamestart">
            <p>other game will continue...</p>
          </div>
        </div>
      </div>
      <div class="game-gate">
        <img src="/material/gamelobbygate.png" alt="game-entry" class="game-gate">
      </div>
    </div>
  </div>
</template>

<style scoped>

.game-entry {
  position: relative; /* 讓子元素可以用絕對定位 */
  width: 300px;       /* 依你的圖片大小設定 */
  height: 200px;
}

.game-light {
  position: relative;
  top: 50%;
  left: 245%;
  z-index: 2;
  height: 100%;
  opacity: 0.8;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.game-gate {
  position: absolute;
  top: 0;
  left: 220%;
  z-index: 1;
  height: 178%;
}


.zoom {
  transform: scale(1.2);
}

.overlay {
  /* font adjust*/
  font-family: "Press Start 2P", sans-serif;
  font-size: 25px;
  color: #ffce3c;
  text-shadow:
      -3px -3px 0 black,
      2px -2px 0 black,
      -2px  2px 0 black,
      -2px  2px 0 black,
      2px  2px 0 black;
  text-align: center;

  opacity: 0;
  transition: opacity 0.4s ease;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  position: absolute;
  right: -110%;
  top: 10%;
  width: 250%;
  height: 150%;
  z-index: 3;
  pointer-events: auto;


}

.show {
  opacity: 1;
}

.game-card{
  margin-top: -8%;
  display: flex;
  font-size: 15px;
  align-items: center;
}
.game-card img{
  height: 300px;
}


</style>