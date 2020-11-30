<template>
  <div class="home" id="home">
    <form :action="formData[formIndex].action" class="search-form" method="get" target="_blank">
      <select id="form-select" class="form-select" @change="formOptions">
        <option v-for="item in formData" :key="item.name" :value="item.name">{{item.name}}</option>
      </select>
      <input type="text" class="keyword" :name="formData[formIndex].inputName" placeholder="请输入您要搜索的内容" />
      <input type="submit" class="button" value="搜索" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const formData = [
      {
        name: '百度',
        action: 'http://www.baidu.com.cn/s',
        inputName: 'wd'
      },
      {
        name: 'bilibili',
        action: 'https://search.bilibili.com/all?',
        inputName: 'keyword'
      },
      {
        name: 'QQ音乐',
        action: 'https://y.qq.com/portal/search.html?',
        inputName: 'w'
      },
      {
        name: '淘宝',
        action: 'https://s.taobao.com/search',
        inputName: 'q'
      }
    ]
    const formIndex = ref(0)
    const formOptions = () => {
      const select = document.querySelector('#form-select') as HTMLSelectElement
      formIndex.value = select.selectedIndex
    }
    const updateHeight = () => {
      const home = document.querySelector('#home') as HTMLElement
      home.style.minHeight = window.innerHeight + 'px'
    }
    onMounted(() => {
      const home = document.querySelector('#home') as HTMLElement
      home.style.minHeight = window.innerHeight + 'px'
      window.addEventListener('resize', updateHeight)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', updateHeight)
    })
    return {
      formData,
      formOptions,
      formIndex
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  .pos(r)
}
.search-form {
  .pos(a);
  top: 30%;
  left: 50%;
  .tran(-50%, 0)
}
.form-select {
  .h(44px);
  .w(100px);
  .outline-none;
  .bor(2px solid @border-color-gray);
  .cancel-select-arrow;
  margin-right: 50px;
  padding-left: 20px;
  .c(@font-color-gray);
  &:focus {
    border-color: @border-color-active-gray
  }
}
.keyword {
  .w(480px);
  .h(16px);
  .p(12px 16px);
  .v(t);
  .br(10px);
  .bor(2px solid @border-color-gray);
  .ovh;
  .outline-none;
  &:focus {
    border-color: @common-blue
  }
}
.button {
  .d(n)
}
</style>
