<template>
  <div class="register-page">
    <ScrollBox>
      <UserinfoForm />
    </ScrollBox>
  </div>
</template>
<script setup>

import ScrollBox from '../components/Scrollbox.vue'
import UserinfoForm from '../components/UserinfoForm.vue'

</script>

<style scoped>

.register-page {
  font-family: "Press Start 2P", sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh; /* 讓 body 佔滿整個視窗 */
  background-image: url('material/scrollbackground.png'); /* 換成你的背景圖片 */
  background-size: 950px 805px;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll; /* 背景固定 */
  background-color: #F3E3C9;
  /* scroll-box 置中 */
  display: grid;
  justify-content: center;
  align-items: center;
}

</style>