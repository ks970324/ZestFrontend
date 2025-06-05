<template>

  <div class="audio-control" onclick="toggleAudio()">
    <img src="/material/music-on.png" alt="music">
  </div>

  <audio id="background-audio" autoplay loop>
    <source src="music/homepage.mp3" type="audio/mp3">
    Your browser does not support the audio element.
  </audio>
</template>

<script setup>
// 背景音樂控制
const audio = document.getElementById('background-audio');
const control = document.querySelector('.audio-control');

// 預設音樂播放
document.addEventListener('DOMContentLoaded', () => {
  audio.play().catch(err => {
    console.log('Autoplay blocked:', err);
  });
});

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    control.innerHTML = '<img src="/material/music-on.png" alt="Music On" width="30">';
  } else {
    audio.pause();
    control.innerHTML = '<img src="/material/music-off.png" alt="Music On" width="30">';
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