# 安澜网2.0<http://v2.anlan.xyz>

## project need

``` txt
yarn
node 14.x
```

## Project setup

``` shell
yarn install
```

### Compiles and hot-reloads for development

``` shell
yarn serve
```

### Compiles and minifies for production

``` shell
yarn build
```

### Lints and fixes files

``` shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### tree

│  
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  element-variables.scss
    │  main.ts
    │  router.ts
    │  shims-axios.d.ts
    │  shims-vue.d.ts
    │  store.ts
    │  
    ├─assets                          //静态资源
    ├─components                      //公用组件
    │      AlTable.vue
    │      config.ts                  //全局注册组件
    │
    ├─less
    │      common.less                //通用函数
    │      components.less            //定义特殊类名
    │      main.less
    │      reset.less                 //重置原生
    │      var.less                   //定义常量
    │
    ├─plugins                         //第三方配置
    │      element.ts
    │
    ├─services
    │      api.ts
    │      index.ts
    │
    └─views
            404.vue                   //错误页面
            Home.vue                  //主页
