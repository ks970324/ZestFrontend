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
            @click="blueCellClicked(x-1, y-1)"
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
import { ref, onMounted} from 'vue'
import { useAuthStore} from "../stores/auth.js";

const auth = useAuthStore()



const playerPos = ref({ x: 1, y: 1 }) // 藍方初始位置
const enemyPos  = ref({ x: 1, y: 1 }) // 紅方初始位置

const playerimg = ref('')

function blueCellClicked(x, y) {
  console.log('點擊藍方格子', x, y)
  playerPos.value = { x, y } // 移動玩家
}

onMounted(async () => {
  try {
    playerimg.value = await auth.getcharacter()
  } catch (err) {
    console.log(err)
    playerimg.value = '/material/boy_brown_blue.png'
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
  cursor: pointer;
}

.blue { background-color: #007bff; }
.red  { background-color: #dc3545; }

.grid-item img {
  width: 80%;
}
</style>
