<template>
  <section class="error-page" id="error-page">
    <div class="error-box">
      <div class="error-text">404 Not Found</div>
      <div class="error-container">
        <div><img src="../assets/404.jpg" class="error-img"></div>
        <div class="error-description">您输入的网址已被安澜吃掉，请更换正确的网址</div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  setup () {
    const updateHeight = () => {
      document.querySelector('#error-page').style.minHeight = window.innerHeight + 'px'
    }
    onMounted(() => {
      document.querySelector('#error-page').style.minHeight = window.innerHeight + 'px'
      window.addEventListener('resize', updateHeight)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', updateHeight)
    })
  }
})
</script>

<style lang="less" scoped>
.error-page {
  .b;
  .df
}
.error-box {
  .mau
}
.error-text {
  .fs24
}
.error-container {
  color: @red
}
.error-img {
  width: 373px;
  height: 320px
}
.error-description {
  .fs18
}
</style>
