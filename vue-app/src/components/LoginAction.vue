<template>
  <div class="login-action">
    <button  v-if="$slots.login" type="submit" class="login-btn">
      <slot name="login" />
    </button>
    <RouterLink v-if="$slots.register && to" :to="to" class="register-btn">
      <slot name="register"/>
    </RouterLink>
  </div>
</template>

<script setup>

defineProps({
  to: {
    type: String,
    required: false
  }
})


</script>

<style scoped>

.login-btn, .register-btn {
  display: inline-flex;
  margin: 20px;
  font-size: 20px;
  cursor: pointer;
  color: #000000;
  align-items: center; /* 垂直對齊 */
  gap: 8px; /* 控制 icon 與文字間距 */
  transition: all 0.3s;
  font-family: 'Press Start 2P', sans-serif;
  border: none;
  background: none;
  text-decoration: none; /* 取消底線 */
}

.login-btn::before,
.register-btn::before {
  content: url('/material/play1.png'); /* 替換為你的 icon 路徑 */
  margin-top: 5px; /* 向下移動 */
  width: 20px; /* icon 大小 */
  height: 20px;
  transition: opacity 0.3s ease-in-out; /*轉場效果持續0.3s，開始結束都慢中間加快，效果較平滑*/
  margin-right: 15px; /* 調整這個值來改變 icon 和文字之間的距離 */
  transform: translateY(-50%);
}

.login-btn:hover::before,
.register-btn:hover::before {
  content: url('/material/play.png'); /* 替換成新 icon */
}


</style>