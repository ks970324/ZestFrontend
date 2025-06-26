<template>
  <div class="login-form">
    <form @submit.prevent="handleLogin">
      <input
          type="text"
          v-model="email"
          required
          placeholder="email"
      />

      <input
          type="password"
          v-model="password"
          required
          placeholder="password"
      />

      <div v-if="showError" class="errormessage">
        *** Wrong password or email ***
      </div>

      <label for="remember" class="remember">
        <input
            type="checkbox"
            id="remember"
            v-model="remember"
            name="remember"
        />
        Remember me
      </label>
      <div class="buttons">
      <LoginAction type="submit" #login>Go!</LoginAction>
      <LoginAction to="/register" #register>Join us!</LoginAction>
      </div>
    </form>
  </div>

</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import {onMounted} from "vue";
import LoginAction from "./LoginAction.vue";

const email = ref('')
const password = ref('')
const remember = ref(false)
const showError = ref(false)

const auth = useAuthStore()
const router = useRouter()




async function handleLogin() {
  const success = await auth.login(email.value, password.value)

  if (success) {
    router.push('/gamelobby')
  } else {
    showError.value = true
  }


}
</script>

<style scoped>
.login-form {
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.login-form input {
  width: 40%;
  padding: 10px;
  font-family: "Press Start 2P", sans-serif;
  font-size: 20px; /* 文字大小 */
  text-align: center;
  display: block; /*input換行排列*/
  border-radius: 1px; /* 圓角效果 */
  background-color: rgba(255, 255, 255, 0.5); /* 半透明背景 */
  border: none; /* 移除邊框 */
  margin: 20px auto; /*input間的寬度*/

}

.remember {
  display: flex; /* 使用 flex 來排列 checkbox 和文字 */
  align-items: center;  /* 使 checkbox 和文字垂直置中 */
  justify-content: center;
  gap: 15px; /* 調整 checkbox 和文字之間的間距 */
  margin: 30px 0;
}

.remember input[type="checkbox"] {
  width: 20px; /* 調整寬度 */
  height: 20px; /* 調整高度 */
  margin: 10px; /* 移除外邊距 */
}

/* 輸入框聚焦時的效果 */
.login-form input:focus {
  border: 3px solid #ffffff;
  outline: none; /* 保證焦點時不會有額外的邊框 */
}

.login-form input:valid {
  border-color: #ffce3c; /* 正確輸入時邊框變色 */
}

.buttons {
  display: inline-flex;
}

.errormessage {
  color: red;
}
</style>
