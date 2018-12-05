import Vue from 'vue'
import Axios from 'axios'
import  VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '../../assets/css/common.css'

import App from './App'
import Message from '@/components/Message.vue'
import LeftNav from './components/LeftNav.vue'

import router from './router.js'
import commonFun from '../../assets/js/commonFun.js'
import commonVar from '../../assets/js/commonVar.js'

Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.component('Message', Message)
Vue.component('LeftNav', LeftNav)

Vue.prototype.$commonFun = commonFun;
Vue.prototype.$commonVar = commonVar;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
