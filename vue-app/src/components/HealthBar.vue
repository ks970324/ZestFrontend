<script setup>
import { computed } from 'vue'
import { storeToRefs} from "pinia";
import { useGameStore } from '../stores/game'
const game = useGameStore()
const { BlueHP, RedHP } = storeToRefs(game)


// 計算 hearts (滿心 / 半心 / 空心)
function getHearts(health) {
  const fullHearts = Math.floor(health / 2)
  const halfHeart = health % 2 === 1
  const emptyHearts = 5 - fullHearts - (halfHeart ? 1 : 0)

  const hearts = []
  for (let i = 0; i < fullHearts; i++) hearts.push('full')
  if (halfHeart) hearts.push('half')
  for (let i = 0; i < emptyHearts; i++) hearts.push('empty')

  return hearts
}

const blueHearts = computed(() => getHearts(BlueHP.value))
const redHearts = computed(() => getHearts(RedHP.value))

</script>

<template>
  <div class="health-bar">
    <!-- 藍方血條 -->
    <div class="playergroup">
      <div class="blueplayer-label">Player</div>
      <div class="blueplayer-health">
        <img
            v-for="(heart, index) in blueHearts"
            :key="'blue-' + index"
            :src="heart === 'full' ? '/material/fullheart.png' :
                heart === 'half' ? '/material/halfheart.png' :
                '/material/emptyheart.png'"
            width="35"
        />
      </div>
    </div>

    <!-- 紅方血條 -->
    <div class="playergroup">
      <div class="redplayer-label">Computer</div>
      <div class="redplayer-health">
        <img
            v-for="(heart, index) in redHearts"
            :key="'red-' + index"
            :src="heart === 'full' ? '/material/fullheart.png' :
                heart === 'half' ? '/material/halfheart.png' :
                '/material/emptyheart.png'"
            width="35"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.health-bar {
  color: white;
  margin-bottom: 30px;
  display: flex;
  gap: 70px;
  justify-content: center;
}

.playergroup {
  display: flex;
  align-items: center;
}

.blueplayer-label{
  width: 120px;
}

.redplayer-label {
  width: 145px;
}

.blueplayer-health, .redplayer-health {
  display: flex;
  align-items: center;
  width: 180px;
}

</style>