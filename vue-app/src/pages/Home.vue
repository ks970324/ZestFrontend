
<template>
  <div class="header">
    <div class="title">Zest</div>
    <AudioToggle />
  </div>

  <div class="gameboy">
    <GameboyFrame />
    <GameboyScreen />
  </div>

  <!-- background music -->
  <audio id="background-audio" autoplay loop>
    <source src="/music/homepage.mp3" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>


</template>

<script setup>
import AudioToggle from "../components/AudioToggle.vue";
import GameboyFrame from "../components/GameboyFrame.vue";
import GameboyScreen from "../components/GameboyScreen.vue";
</script>

<style>

body {
  background: black;
  font-family: "Press Start 2P", sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
}

.header {
  display: grid;
  grid-template-columns: 1fr auto;
}

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 60px;
  margin-top: 50px;
}


</style>
