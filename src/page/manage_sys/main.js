// 引入库
import Vue from 'vue'
import Axios from 'axios'
import  VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui'

// 引入css
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '../../assets/css/common.css'

// 引入模块
import App from './App'
import Message from '@/components/Message.vue'
import LeftNav from './components/LeftNav.vue'

// 引入路由和vuex
import router from './router.js'
import store from "./store.js"

// 引入公用变量
import commonFun from '../../assets/js/commonFun.js'
import commonVar from '../../assets/js/commonVar.js'

// 使用UI与插件
Vue.use(ElementUI)
Vue.use(VueQuillEditor)

// 使用引入的模块
Vue.component('Message', Message)
Vue.component('LeftNav', LeftNav)

// Vue.prototype.$commonFun = commonFun;
// Vue.prototype.$commonVar = commonVar;
// Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建vue实例
new Vue({
  el: '#app',
  router,
  store,
  commonFun,
  commonVar,
  Axios,
  render: h => h(App)
})
