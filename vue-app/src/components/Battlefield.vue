<template>
  <div class="battlefield">
    <div class="grid-container">
      <div
          v-for="y in 3" :key="'blue-row-' + y"
          class="row"
      >
        <div
            v-for="x in 3" :key="'blue-cell-' + x"
            class="grid-item blue"
            @click="blueCellClicked(x-1, y-1); handleKeyDown();"
        >
          <img v-if="playerPos.x === x-1 && playerPos.y === y-1" :src="playerimg" />
        </div>
      </div>
    </div>

    <!-- 紅方九宮格 -->
    <div class="grid-container">
      <div
          v-for="y in 3" :key="'red-row-' + y"
          class="row"
      >
        <div
            v-for="x in 3" :key="'red-cell-' + x"
            class="grid-item red"
        >
          <img v-if="enemyPos.x === x-1 && enemyPos.y === y-1" src="/material/robot.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuthStore} from "../stores/auth.js";

const auth = useAuthStore()



const playerPos = ref({ x: 1, y: 1 }) // 藍方初始位置
const enemyPos  = ref({ x: 1, y: 1 }) // 紅方初始位置
const step = 1

const playerimg = ref('')

function blueCellClicked(x, y) {
  console.log('點擊藍方格子', x, y)
  playerPos.value = { x, y } // 移動玩家
}

onMounted(async () => {
  window.addEventListener("keydown", handleKeyDown)
  try {
    playerimg.value = await auth.getcharacter()
  } catch (err) {
    console.log(err)
    playerimg.value = '/material/boy_brown_blue.png'
  }

  onUnmounted(() => {
    // 避免記憶體洩漏
    window.removeEventListener("keydown", handleKeyDown)
  })

function handleKeyDown(e){
    let { x, y } = playerPos.value
    switch (e.key) {
        case 'ArrowUp':
          y -= step; break
        case 'ArrowDown':
          y += step; break
        case 'ArrowLeft':
          x -= step; break
        case 'ArrowRight':
          x += step; break
    }

  x = Math.max(0, Math.min(2, x))
  y = Math.max(0, Math.min(2, y))

    playerPos.value = { x, y }
}



})

</script>

<style scoped>
.battlefield {
  display: flex;
  gap: 40px; /* 兩個九宮格間距 */
}

.grid-container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.grid-item {
  width: 125px;
  height: 125px;
  border: 2px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blue {
  background-color: #007bff;
  cursor: pointer;
}
.red  { background-color: #dc3545; }

.grid-item img {
  width: 80%;
}
</style>
