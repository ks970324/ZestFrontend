<script setup>

</script>

<template>
  <div class="title">
    <span class = "greeting_1">Welcome adventure! </span>
    <p class = "greeting_2">Before you start your journey,</p>
    <p class = "greeting_3">Please complete the required info.</p>
  </div>
  <div class="userinfo">
    <label for="email">Email</label>
    <br>
    <input type="text" id="email" required placeholder="">
    <br>
    <label for="password">Password</label>
    <br>
    <input type="text" id="password" required placeholder="">
    <br>
    <label for="confirm_password">Password Confirm</label>
    <br>
    <input type="text" id="confirm_password" required placeholder="">
  </div>
</template>

<style scoped>

.greeting_1{
  font-size: 28px;
  justify-content: center;
}

.greeting_2,  .greeting_3{
  font-size: 14px;
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


.userinfo input:valid {
  color: rgba(132, 87, 54, 0.9);
}


</style>