<template>
  <div class="home">
    <form :action="formData[formIndex].action" method="get" target="_blank">
      <select id="form-select" @change="formOptions">
        <option v-for="item in formData" :key="item.name" :value="item.name">{{item.name}}</option>
      </select>
      <input type="text" :name="formData[formIndex].inputName" placeholder="请输入您要搜索的内容" />
      <input type="submit" value="搜索" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    return {
      formData,
      formOptions,
      formIndex
    }
  }
})
</script>
