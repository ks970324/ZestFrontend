<template>
  <div class="register-page">
    <div class="header">
      <div class="home">
        <a href='/'><img src="/material/logo.png" alt="home" class="home-icon"></a>
      </div>
    </div>
    <ScrollBox>
      <UserinfoForm />
      <CharacterSelect/>
      <SignatureCanvas />
      <div class="submit-button">
        <button class="submit_button" @click="handleSubmit">Submit</button>
      </div>
      <div class="error-message" v-if="registerStore.submitError">
        <div class="error-message-content">
          <p>error</p>
          Please complete the required user information and check if valid.
        </div>
        <button class="close-btn" @click="closeError">Close</button>
      </div>
      <div class="redirect" v-if="successregister">
        <div class="redirect-content">
          <p>Success</p>
          <p>Congratulations to join us!</p>
          <p>Press "Login" to log in.</p>
        </div>
        <button class="login-btn" @click="loginpage">Login</button>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const registerStore = useRegisterStore()
const successregister = ref(false)

function closeError() {
  registerStore.submitError = false
}

function loginpage() {
  router.push('/login')
}


const handleSubmit = async () => {

  const success = await registerStore.register()

  if (success.message) {
    console.log('register success:', success.message)
    successregister.value = true

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

.header {
  margin:0;
  width:100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.home-icon {
  cursor: pointer;
  margin-left: 10px;
  margin-top: 10px;
}

.header img {
  width:36px;
  padding: 3px;
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

.error-message {
  font-family: 'Press Start 2P', sans-serif;
  position: fixed;
  left: 33%;
  top: 40%;
  width: 35%;
  height: 25%;
  background-color:white;
  display: block;
  justify-content: center;
  z-index: 1000;
  text-align: center;
  border: 5px solid #845736;
  border-radius: 20px;
}

.close-btn {
  font-family: 'Press Start 2P', sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: white;
  background-color: #BE8760;
  padding: 10px;
  margin-top: 25px;
  border: none;
}

.close-btn:hover {
  background-color: #845736;
}

.redirect {
  font-family: 'Press Start 2P', sans-serif;
  position: fixed;
  left: 33%;
  top: 40%;
  width: 35%;
  height: 25%;
  background-color:white;
  display: block;
  justify-content: center;
  z-index: 1000;
  text-align: center;
  border: 5px solid #845736;
  border-radius: 20px;
}

.login-btn {
  font-family: 'Press Start 2P', sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: white;
  background-color: #BE8760;
  padding: 10px;
  margin-top: 10px;
  border: none;
}

.login-btn:hover {
  background-color: #845736;
}

</style>