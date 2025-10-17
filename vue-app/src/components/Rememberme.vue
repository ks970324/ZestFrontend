<template>
  <label for="remember" class="remember">
    <input
        type="checkbox"
        id="remember"
        v-model="remember"
        name="remember"
    />
    Remember me
  </label>
</template>

<script setup>
import { ref } from 'vue'

const savedremember = localStorage.getItem('remember') === 'true'
const remember = ref(savedremember)

</script>

<style scoped>
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
</style>

