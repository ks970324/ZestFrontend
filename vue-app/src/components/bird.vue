<script setup>
</script>

<template>
<div class="bird"></div>
</template>

<style scoped>

.bird {
  position: absolute;
  width: 40%;
  height: 40%;
  background-image: url('/material/bird.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: flyaway 1.5s ease-in forwards;
  z-index: 1000;
}

@keyframes flyaway {
  0% {
    left: 5%;
    top: 40%;
    opacity: 1;
  }
  80% {
    left: 60%;
    top: 140%;
    opacity: 1;
  }
  100% {
    left: 60%;
    top: 140%;
    opacity: 0;
  }
}

</style>