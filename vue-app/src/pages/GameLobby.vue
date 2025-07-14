<template>
  <div class="game-lobby">
    <div class="header">
      <a href="/"><img src="/material/logo.png" alt="home" class="home-icon"/>
      </a>
      <DropdownMenu />
    </div>

    <!-- background music -->
    <audio id="background-audio" autoplay loop>
      <source src="/music/gamelobby.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup>
import DropdownMenu from '../components/DropdownMenu.vue';
import UserProfile from "../components/UserProfile.vue";

</script>

<style scoped>
.game-lobby {
  margin: 0;
  padding: 0;
  font-family: 'Press Start 2P', sans-serif;
  background: url('material/gamelobbybackground1.png');
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.header {
  display: flex;
  width: 100%;
}

.home-icon{
  cursor: pointer;
  margin-left: 5px;
  margin-top: 5px;
}

.header img {
  width:36px;
  padding: 3px;
}
</style>