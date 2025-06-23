<template>
  <div class="audio-control" @click="toggleAudio()">
    <img :src="isPlaying ? '/material/music-on.png' : '/material/music-off.png'" alt="music" width="30" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
.audio-control {
  justify-self: end;
  margin: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  cursor: pointer;
}

.audio-control:hover {
  background-color: rgba(255, 255, 255, 0.2);
}


</style>