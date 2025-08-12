<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const signatureCanvas = ref(null)
let ctx = null
let isDrawing = false
let canvas = null

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

let handleMouseDown, handleMouseMove, handleMouseUp
let handleTouchStart, handleTouchMove, handleTouchEnd
let handleDocumentClick

onMounted(() => {
  canvas = signatureCanvas.value

  ctx = canvas.getContext("2d")
  ctx.lineWidth = 2
  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(132, 87, 54, 0.9)";

  handleMouseDown = (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  handleMouseMove = (e) => {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  }

  handleMouseUp = () => {
    isDrawing = false
    ctx.closePath()
  }

  handleTouchStart = (e) => {
    const touch = e.touches[0]
    isDrawing = true
    ctx.beginPath()
    ctx.moveTo(
        touch.clientX - canvas.getBoundingClientRect().left,
        touch.clientY - canvas.getBoundingClientRect().top
    )
    e.preventDefault()
  }

  handleTouchMove = (e) => {
    if (isDrawing) {
      const touch = e.touches[0]
      ctx.lineTo(
          touch.clientX - canvas.getBoundingClientRect().left,
          touch.clientY - canvas.getBoundingClientRect().top
      )
      ctx.stroke()
    }
    e.preventDefault()
  }

  handleTouchEnd = () => {
    isDrawing = false
    ctx.closePath()
  }

  handleDocumentClick = (e) => {
    if (!canvas.contains(e.target) && !e.target.classList.contains('submit_button')) {
      clearCanvas()
    }
  }

  // 綁定事件
  canvas.addEventListener('mousedown', handleMouseDown)
  canvas.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('mouseup', handleMouseUp)
  canvas.addEventListener('touchstart', handleTouchStart)
  canvas.addEventListener('touchmove', handleTouchMove)
  canvas.addEventListener('touchend', handleTouchEnd)
  document.addEventListener('click', handleDocumentClick)

})


// 離開元件時解除事件綁定（避免 memory leak）
onUnmounted(() => {
  canvas.removeEventListener('mousedown', handleMouseDown)
  canvas.removeEventListener('mousemove', handleMouseMove)
  canvas.removeEventListener('mouseup', handleMouseUp)
  canvas.removeEventListener('touchstart', handleTouchStart)
  canvas.removeEventListener('touchmove', handleTouchMove)
  canvas.removeEventListener('touchend', handleTouchEnd)
  document.removeEventListener('click', handleDocumentClick)
})

</script>

<template>
  <div class="submit">
    <div>
      Please sign your name
    </div>
    <div class="submit_sign">
      <canvas id="signatureCanvas" ref="signatureCanvas" width="400px" height="100px"></canvas>
    </div>
  </div>
</template>

<style scoped>

.submit {
  margin-top: 15%;
  text-align: center;
  justify-items: center;
}

.submit_sign {
  border-bottom: 2px solid #845736;
  touch-action: none; /* 防止觸控時滾動 */
  width: 90%;
  cursor: url("/material/pen.png") 20 60, auto;
  margin-bottom: 5%;
}



</style>