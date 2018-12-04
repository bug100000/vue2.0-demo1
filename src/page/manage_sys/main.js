import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Message from '@/components/Message.vue'
import LeftNav from './components/LeftNav.vue'
import router from './router.js'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component('Message', Message)
Vue.component('LeftNav', LeftNav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
