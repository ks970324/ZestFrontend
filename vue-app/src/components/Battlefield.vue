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
          <img v-if="BluePosition.x === x-1 && BluePosition.y === y-1" :src="playerimg" />
        </div>
      </div>
    </div>

    <!-- red-->
    <div class="grid-container">
      <div
          v-for="y in 3" :key="'red-row-' + y"
          class="row"
      >
        <div
            v-for="x in 3" :key="'red-cell-' + x"
            class="grid-item red"
        >
          <img v-if="RedPosition.x === x-1 && RedPosition.y === y-1" src="/material/robot.png" />
        </div>
      </div>
    </div>
    <div class="bullet" v-if="bullet.visible" :style="bulletStyle">
      <img src="/material/bullet.png" alt="bullet" />
    </div>
    <PushLoginModal v-if="showLoginModal"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, reactive, computed} from 'vue'
import { useAuthStore} from "../stores/auth.js";
import { useGameStore} from "../stores/game.js";
import { storeToRefs } from 'pinia'
import PushLoginModal from './PushLoginModal.vue'
const auth = useAuthStore()
const game = useGameStore()
const { BluePosition, RedPosition } = storeToRefs(game)
const { showLoginModal } = storeToRefs(auth)

const step = 1
const playerimg = ref('')

const bullet = reactive({
  visible: false,
  x: 0,
  y: 0,
  transition: 'none'
})

const bulletStyle = computed(() => ({
  position: "absolute",
  left: bullet.x + "px",
  top: bullet.y + "px",
  transition: bullet.transition,
}))


watch(BluePosition, (newVal) => {
  localStorage.setItem('BluePos', JSON.stringify(newVal))
}, { deep: true })

function blueCellClicked(x, y) {
  BluePosition.value = { x, y }
  console.log('Blue Position', x, y)
  game.updateblueposition()
}

onMounted(async () => {
  window.addEventListener("keydown", handleKeyDown)
  try {
    playerimg.value = await auth.getcharacter()
  } catch (err) {
    console.log(err)
    playerimg.value = '/material/boy_brown_blue.png'
  }

  localStorage.setItem('BluePos', JSON.stringify(BluePosition.value))
  localStorage.setItem('RedPos', JSON.stringify(RedPosition.value))
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown)
})

function handleKeyDown(e){
    let { x, y } = BluePosition.value
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

  BluePosition.value = { x, y }
  game.updateblueposition()

}

// --- 監聽 store 的 Hit ---
watch(() => game.Hit, (hit) => {
  if(hit) {
    hitEffect(BluePosition.value, RedPosition.value, game.CurrentRound)
    game.Hit = ''
  }
})
async function hitEffect(BluePos, RedPos, CurrentRound) {
  const cellSize = 125
  const gap = 40
  const redOffsetX = 3 * cellSize + gap;
  let startX, startY, endX, endY

  if(CurrentRound === "red") {
    startX = RedPos.x * cellSize + redOffsetX
    startY = RedPos.y * cellSize
    endX = BluePos.x * cellSize
    endY = BluePos.y * cellSize
  } else {
    startX = BluePos.x * cellSize
    startY = BluePos.y * cellSize
    endX = RedPos.x * cellSize + redOffsetX
    endY = RedPos.y * cellSize
  }

  bullet.transition = "none"
  bullet.x = startX + cellSize/2;
  bullet.y = startY + cellSize/2;
  bullet.visible = true

  setTimeout(() => {
    bullet.transition = "all 0.4s ease-in";
    bullet.x = endX + cellSize/2;
    bullet.y = endY + cellSize/2;
  }, 20)

  setTimeout(() => bullet.visible = false, 450)
}

</script>

<style scoped>
.battlefield {
  display: flex;
  gap: 40px;
  position: relative;
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

.bullet {
  position: absolute;
  justify-content: center;
}

.bullet img {
  pointer-events: none;
  z-index: 10;
  width: 50px;
  height: 50px;

}
</style>
