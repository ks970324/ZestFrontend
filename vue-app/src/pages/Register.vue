<template>
  <div class="register-page">
    <ScrollBox>
      <UserinfoForm />
      <CharacterSelect/>
      <SignatureCanvas />
      <div class="submit-button">
        <button class="submit_button" @click="handleSubmit">Submit</button>
      </div>
    </ScrollBox>
  </div>
</template>

<script setup>

import ScrollBox from '../components/Scrollbox.vue'
import UserinfoForm from '../components/UserinfoForm.vue'
import CharacterSelect from '../components/CharacterSelect.vue'
import SignatureCanvas from '../components/SignatureCanvas.vue'
import { useRegisterStore} from "../stores/register.js";

const registerStore = useRegisterStore()

const handleSubmit = async () => {

  const success = await registerStore.register()
  console.log('register 回傳:', success)


  if (success) {
    console.log('register success:', success)
  }

}

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

.submit-button {
  text-align: center;
}

.submit_button {
  margin-top: 10px;
  font-family: "Press Start 2P", sans-serif;
  background-color: transparent;
  border: none;
  color: #845736;
  cursor: pointer;
  font-size: 18px;
}

.submit_button:active {
  transform: translateY(3px); /* 點擊時向下移動 3px */
}

</style>