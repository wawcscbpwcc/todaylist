import Vue from 'vue'
// 引入App 组件
import App from './App.vue'
// 引入vue-router 配置
import router from './router'
// 引入 vuex的配置
import store from './store' // ./store/index.js
//引入 axios
import axios from './common/myaxios'
//在Vue的原型上添加 $axios
Vue.prototype.$axios = axios

// 引入 element-ui 组件库
import { Message } from "element-ui"
Vue.prototype.$message = Message;

Vue.config.productionTip = false
// 创建一个 vue的实例
new Vue({
  router, // vue-router
  store, // vuex this.$store.state 的数据
  render: h => h(App) // 将App 组件 渲染到 '#app'
}).$mount('#app')
