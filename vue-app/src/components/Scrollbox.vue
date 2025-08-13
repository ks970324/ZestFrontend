<script setup>

</script>

<template>
<div class="scroll-box">

  <slot></slot>

</div>
</template>

<style scoped>

.scroll-box {
  max-width: 505px;
  height: 510px; /* 固定高度，讓它能滾動 */
  color: #845736;
  overflow: auto; /* 讓內容區域內部滾動 */

}

/* 隱藏滾動條（預設透明） */
.scroll-box::-webkit-scrollbar { /*滾動軸軸體*/
  width: 10px;

}

.scroll-box::-webkit-scrollbar-thumb {
  background: transparent;
  opacity: 0; /* 預設隱藏 */
  transition: opacity 0.3s ease-in-out; /* 過渡效果 */
}
.scroll-box::-webkit-scrollbar-track {
  background: transparent; /* 軌道透明 */
}

/* 當滾動時，顯示滾動條 */
.scroll-box:hover::-webkit-scrollbar-thumb,
.scroll-box:focus::-webkit-scrollbar-thumb {
  background: url('material/scroll.png') no-repeat center;
  opacity: 1;
}

</style>