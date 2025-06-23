<!-- src/components/GameboyScreen.vue -->
<template>
  <div class="gameboyScreen">
    <video src="/material/gamevideo.mp4" autoplay loop muted></video>
    <a href="/login">
      <img src="/material/button-a.png" alt="button a" class="button-a" />
    </a>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
      window.location.href = '/login'
    }
  })
})
</script>

<style scoped>
.gameboyScreen video {
  position: absolute;
  top: 143px;
  left: 550px;
  width: 380px;
  height: 380px;
  object-fit: cover;
}

.button-a {
  width: 64px;
  height: 64px;
  position: absolute;
  top: 260px;
  left: 1020px;
  cursor: pointer;
  z-index: 1001;
}

.button-a:active {
  transform: translateY(4px);
}
</style>