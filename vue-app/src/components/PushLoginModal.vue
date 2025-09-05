<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
function loginpage() {
  router.push('/login')
}
</script>

<template>
  <div class="redirect">
    <div class="redirect-content">
      <p>*** Fail ***</p>
      <p>Your Login has expired.</p>
      <p>Press "Login" to log in.</p>
    </div>
    <button class="login-btn" @click="loginpage">Login</button>
  </div>
</template>

<style scoped>
.redirect {
  font-family: 'Press Start 2P', sans-serif;
  color: white;
  position: fixed;
  left: 33%;
  top: 40%;
  width: 35%;
  height: 25%;
  background-color:black;
  display: block;
  justify-content: center;
  z-index: 1000;
  text-align: center;
  padding: 10px;
  border: 3px solid #ff9600;
}

.login-btn {
  font-family: 'Press Start 2P', sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: black;
  background-color: #ffce3c;
  padding: 10px;
  margin-top: 10px;
  border: none;
}

.login-btn:hover {
  background-color: #ff9600;
}
</style>