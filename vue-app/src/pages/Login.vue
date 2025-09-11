<template>
  <div class="login-page">
    <div class="header">
      <a href='/'><img src="/material/logo.png" alt="home" class="home-icon"></a>
    </div>
    <div class="title">
      <h1>Start your adventure!</h1>
    </div>
      <LoginForm />
  </div>

</template>




<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>

<style scoped>

.login-page {
  margin:0;
  padding: 0;
  font-family: "Press Start 2P", sans-serif;
  background: url('/material/loginbackground.png') no-repeat center center fixed;
  background-size: cover; /*填滿整個區域與等比例縮放*/
  height: 100vh;
  width: 100%;

}

.header {
  margin:0;
  width:100%;
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

.title h1{
  margin-top: 50px;
  font-size: 46px;
  text-align: center; /* 置中*/
  white-space: nowrap; /* 防止文字自動換行 */
  color: #000000;
}
</style>
