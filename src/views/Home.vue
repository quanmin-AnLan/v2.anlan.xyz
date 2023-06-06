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
        name: 'google',
        action: 'https://www.google.com.hk/search',
        inputName: 'q'
      },
      {
        name: '百度',
        action: 'https://www.baidu.com.cn/s',
        inputName: 'wd'
      },
      {
        name: 'bilibili',
        action: 'https://search.bilibili.com/all?',
        inputName: 'keyword'
      },
      {
        name: '原神',
        action: 'https://searchwiki.biligame.com/ys/index.php?fulltext=%E6%90%9C%E7%B4%A2&',
        inputName: 'search'
      },
      {
        name: '知乎',
        action: 'https://www.zhihu.com/search?type=content&',
        inputName: 'q'
      },
      {
        name: '淘宝',
        action: 'https://s.taobao.com/search',
        inputName: 'q'
      },
      {
        name: 'MC',
        action: 'https://minecraft.fandom.com/zh/index.php',
        inputName: 'search'
      },
      {
        name: 'QQ音乐',
        action: 'https://y.qq.com/portal/search.html?',
        inputName: 'w'
      },
      {
        name: 'MCmod',
        action: 'https://www.mcmod.cn/s',
        inputName: 'key'
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
  .pos(r);
  .d(f);
  .jc(center);
}
.search-form {
  .pos(a);
  .top(40%);
  .tran(0, -50%)
}
.form-select {
  .h(44px);
  .w(100px);
  .outline-none;
  .bor(2px solid @border-color-gray);
  .cancel-select-arrow;
  .m-r(50px);
  .p-l(20px);
  .c(@font-color-gray);
  &:focus {
    .bor-c(@border-color-active-gray)
  }
}
.keyword {
  .w(480px);
  .h(16px);
  .p(12px 16px);
  .v(t);
  .bor-r(10px);
  .bor(2px solid @border-color-gray);
  .ovh;
  .outline-none;
  &:focus {
    .bor-c(@common-blue)
  }
}
.button {
  .d(n)
}
</style>
