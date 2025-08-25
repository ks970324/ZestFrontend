<script setup>

import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()

const characterspath = ref('')

onMounted(async () => {
    try {
      characterspath.value = await auth.getcharacter()
    } catch (err) {
      console.log(err)
      characterspath.value = '/material/boy_brown_blue.png'
    }
})


</script>

<template>
  <div class="character">
      <img :src="characterspath" alt="character" class="character-image">
  </div>
</template>

<style scoped>

.character {
  position: absolute;
  top: 265%;
  left: 10%;
  z-index: 1000;
}

.character-image {
  width: 100px;
  height: 100px;
}

</style>