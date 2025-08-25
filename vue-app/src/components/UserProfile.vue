<script setup>

import { useAuthStore } from '../stores/auth'
import { ref, onMounted} from 'vue'


const authStore = useAuthStore()
const email = authStore.user?.email || 'Login to see your profile'

const characterspath = ref('')

onMounted(async () => {
  try {
    const characterPath = await authStore.getcharacter()
    characterspath.value = characterPath  || '/material/boy_brown_blue.png'
  } catch (err) {
    console.log(err)
    characterspath.value = '/material/boy_brown_blue.png'
  }
})

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
    <div class="user-profile-header">
      <div class="user-profile-title">User Profile</div>
      <div class="user-profile-close">
        <button class="close-btn" @click="closeProfile">&times;</button>
      </div>
    </div>
    <div class="user-profile-info">
      <div class="user-profile-img">
        <img :src="characterspath" alt="character-img">
      </div>
      <div class="user-profile-name">UserName: {{ email }}</div>
    </div>

  </div>


</template>

<style scoped>

.user-profile {
  font-family: 'Press Start 2P', sans-serif;
  position: fixed;
  left: 35%;
  top: 20%;
  width: 30%;
  height: 40%;
  background-color: white;
  display: block;
  justify-content: center;
  z-index: 1000;
  border: 5px solid #6F5B44;
}


.user-profile-header{
  display: flex;
  justify-content: space-between;
  padding: 8px;
  color: black;
  background-color: #B39D84;
  align-items: center;
  border: 5px solid white;
  border-bottom: none;
}

.user-profile-info{
  color: black;
  margin: 7px;
  background-color: #C5B4A0;
  font-size: 12px;
  height: 70%;
  padding: 5px;
  border: 5px solid #6F5B44;
  display: flex;
}

.user-profile-name{
  font-size: 15px;
  margin-top: 10px;
  line-height: 1.5;
}

.user-profile-img{
  background-color: white;
  height: 30%;
  padding: 5px;
  border: 2px solid #6F5B44;
  width: 15%;
  margin-bottom: 15px;
  margin-right: 15px;
}


.close-btn {
  font-family: 'Press Start 2P', sans-serif;
  font-size: 24px;
  cursor: pointer;
  color: #6F5B44;
  background-color: #F0F0F0;
  padding: 2px;
  border: 3px solid #6F5B44;
}

.close-btn:hover {
  background-color: #BEBEBE	;
}


</style>