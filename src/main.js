import Vue from 'vue'
// 引入App 组件
import App from './App.vue'
// 引入vue-router 配置
import router from './router'
// 引入 vuex的配置
import store from './store' // ./store/index.js
//
Vue.config.productionTip = false
// 创建一个 vue的实例
new Vue({
  router, // vue-router
  store, // vuex this.$store.state 的数据
  render: h => h(App) // 将App 组件 渲染到 '#app'
}).$mount('#app')
