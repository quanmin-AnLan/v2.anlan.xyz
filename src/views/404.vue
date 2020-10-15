<template>
  <section class="b df" id="error-box">
    <div class="mau">
      <div class="fs24">404 Not Found</div>
      <div class="error-container">
        <div><img src="../assets/404.jpg" class="error-img"></div>
        <div class="fs18">您输入的网址已被安澜吃掉，请更换正确的网址</div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup () {
    onMounted(() => {
      document.querySelector('#error-box').style.minHeight = window.innerHeight + 'px'
    })
  }
})
</script>

<style lang="less" scoped>
.error-container {
  color: @red
}
.error-img {
  width: 373px;
  height: 320px
}
</style>
