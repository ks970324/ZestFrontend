<script setup>

import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'


const authStore = useAuthStore()
const email = authStore.user?.email || 'Login to see your profile'

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
      <div class="user-profile-name"> {{ email }}</div>
    </div>
    <button class="close-btn" @click="closeProfile">Close</button>
  </div>


</template>

<style scoped>

.user-profile {
  font-family: 'Press Start 2P', sans-serif;
  position: fixed;
  left: 40%;
  top: 20%;
  width: 30%;
  height: 60%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  color: #ffce3c;
}

.close-btn {
  font-family: 'Press Start 2P', sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: #000000;
  background-color: #ffce3c;
  padding: 10px;
}

.close-btn:hover {
  background-color: #ff9600;
}


</style>