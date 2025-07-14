<template>
  <div :class="AudioClass" @click="toggleAudio" :style="AudioStyle">
    <img :src="isPlaying ? '/material/music-on.png' : '/material/music-off.png'" alt="music" width="30" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  AudioClass: String,
  AudioStyle: [String, Object]
})

const isPlaying = ref(true)
let audioElement = null

onMounted(() => {
  audioElement = document.getElementById('background-audio')

  // 嘗試播放（處理瀏覽器阻擋）
  audioElement?.play().catch((err) => {
    console.log('Autoplay blocked:', err)
    isPlaying.value = false
  })
})

function toggleAudio() {
  if (!audioElement) return

  if (audioElement.paused) {
    audioElement.play()
    isPlaying.value = true
  } else {
    audioElement.pause()
    isPlaying.value = false
  }
}


</script>

<style scoped>

</style>