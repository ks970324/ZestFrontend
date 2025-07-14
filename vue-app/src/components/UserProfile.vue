<script setup>

import { useAuthStore } from '../stores/auth'

import { ref } from 'vue'

const isProfileOpen = ref(false)

function openProfile() {
  isProfileOpen.value = true
}
function closeProfile() {
  isProfileOpen.value = false
}

defineExpose({ openProfile })

</script>

<template>

  <div class="user-profile" v-if="isProfileOpen">
    <div class="user-profile-info">
      <div class="user-profile-img"></div>
      <div class="user-profile-name"> {{ useAuthStore.user }}</div>
    </div>
    <button class="close-btn" @click="closeProfile">Close</button>
  </div>


</template>

<style scoped>

.user-profile {
  position: fixed;
  left: 40%;
  top: 20%;
  width: 50%;
  height: 50%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

</style>