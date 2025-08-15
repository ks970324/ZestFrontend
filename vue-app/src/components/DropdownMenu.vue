<script setup>
import UserProfile from '../components/UserProfile.vue';
import AudioToggle from '../components/AudioToggle.vue';
import { ref } from 'vue'

const modalRef = ref()
const showDropdown = ref(false)


function openModal() {
  modalRef.value?.openProfile()
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}


</script>

<template>
  <div class="dropdown">
    <!-- 主按鈕圖片 -->
    <img src="/material/bag.png" alt="bag" @click="toggleDropdown">

    <!-- 下拉圖片選單 -->
    <div class="dropdown-content" v-show="showDropdown">
      <div class="dropdown-profile"  >
          <img src="/material/profile.png" alt="profile" @click="openModal">
      </div>
      <div class="dropdown-music">
        <AudioToggle AudioClass="audio-control" />
      </div>
    </div>
    <UserProfile ref="modalRef" />
  </div>
</template>

<style scoped>

.dropdown {
  position: relative;
  display: inline-block;
  left:90%;
  top: 5px;
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  right: 5%;
  background-color: #ab9377;
  border: black solid 3px;
  z-index: 5;
}

.dropdown-profile{
  width: 100%;
  border-bottom: black solid 3px;
  box-sizing: border-box;
  padding: 5px;
  justify-content: center;
}

.audio-control{
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  justify-content: center;

}

.dropdown-music {
  padding: 5px;
}


.dropdown-content img {
  display: block;
  width: 30px;
  height:30px;
  padding: 5px;
  cursor: pointer;
}



</style>