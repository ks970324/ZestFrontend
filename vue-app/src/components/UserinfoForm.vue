<script setup>

import {ref, watchEffect} from 'vue'
import { checkemailapi } from "../services/checkemailapi.js";
import { useRegisterStore} from "../stores/register.js";


const email = ref('')
const password = ref('')
const confirmpassword = ref('')

const registerStore = useRegisterStore()

const emailError = ref(false)
const passwordError = ref(false)

const emaildirty = ref(false)
const passworddirty = ref(false)
const confirmpassworddirty = ref(false)

const emailExists = ref()
const checkpassword = ref()
let emaildebounceTimer = null
let passworddebounceTimer = null

watchEffect(() => {
  const newEmail = email.value

  if (!emaildirty.value && newEmail) emaildirty.value = true
  if (!emaildirty.value) return

  if (!newEmail || newEmail.length < 5 || !newEmail.includes("@")) {
    emailError.value = true;
    return} else { emailError.value = false }

  if (emaildebounceTimer) clearTimeout(emaildebounceTimer)
  emaildebounceTimer = setTimeout(async () => {
    try {
      const response = await checkemailapi(newEmail)
      emailExists.value = response.exists
    } catch (err) {
      console.error('Error checking email', err)
    }
  }, 300)

  registerStore.email = newEmail

})



watchEffect(() => {
  const newPassword = password.value
  const newConfirmPassword = confirmpassword.value

  if (!passworddirty.value && newPassword) passworddirty.value = true
  if (!confirmpassworddirty.value && newConfirmPassword) confirmpassworddirty.value = true
  if (!passworddirty.value && !confirmpassworddirty.value ) return

  if (!newPassword || newPassword.length < 6) {
    passwordError.value = true;
    return
  } else { passwordError.value = false }

  if (passworddebounceTimer) clearTimeout(passworddebounceTimer)

  passworddebounceTimer = setTimeout(() => {
    checkpassword.value = newPassword === newConfirmPassword
    if (!checkpassword.value) {
      passwordError.value = false
    }
  }, 300)

  registerStore.password = newPassword


})





</script>

<template>
  <div class="title">
    <span class = "greeting_1">Welcome adventure! </span>
    <span class = "greeting_2">Before you start your journey,</span>
    <span class = "greeting_3">Please complete the required user information.</span>
  </div>
  <div class="userinfo">
    <label for="email">Email</label>
    <br>
    <input
        type="text"
        id="email"
        v-model="email"
        required placeholder=""
    />
    <span v-if="emailExists === true">
      <img src="/material/remove.png" alt="email" class="checkicon">
    </span>
    <span v-else-if="emailExists === false" style="color: red;">
       <img src="/material/check.png" alt="email" class="checkicon">
    </span>
    <br>
    <div v-if="emailError" class="errormessage">
      * Please make sure your email is valid.
    </div>
    <label for="password">Password</label>
    <br>
    <input
        type="text"
        id="password"
        v-model="password"
        required placeholder=""
    />
    <br>
    <label for="confirm_password">Password Confirm</label>
    <br>
    <input
        type="text"
        id="confirm_password"
        required placeholder=""
        v-model="confirmpassword">
    <span v-if="checkpassword === false">
      <img src="/material/remove.png" alt="email" class="checkicon">
    </span>
    <span v-else-if="checkpassword === true" >
       <img src="/material/check.png" alt="email" class="checkicon">
    </span>
    <br>

    <div v-if="passwordError" class="errormessage">
      * Please make sure your password length must be at least 5 words.
    </div>

  </div>
</template>

<style scoped>

.title{
  margin-top: 5%;
  margin-bottom: 5%;
  width: 98%;
}

.greeting_1{
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
}

.greeting_2,  .greeting_3{
  display: block;
  font-size: 14px;
  line-height: 1.5;

}


.userinfo{
  text-align: left; /* 文字靠左 */
  margin-bottom: 5%;
}

.userinfo input{
  background: transparent;  /* 背景透明 */
  font-family: "Press Start 2P", sans-serif;
  border: none;  /* 移除預設邊框 */
  border-bottom: 2px solid #845736; /* 加上底線 */
  outline: none; /* 移除點擊時的藍色外框 */
  color: rgba(132, 87, 54, 0.9);  /* 文字顏色 */
  width: 90%;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 18px;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 1000px transparent inset !important; /* 讓 autofill 不蓋住背景圖 */
  background-color: transparent !important;
  -webkit-text-fill-color: #845736 !important; /* 修正 autofill 會改文字顏色的問題 */
  transition: background-color 5000s ease-in-out 0s;
}

.checkicon{
  width: 20px;
  height: 20px;
}

.errormessage{
  color: #F23C36;
  font-size: 14px;
  margin: 10px 0;
}

</style>