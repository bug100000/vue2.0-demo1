import Vue from 'vue'
import Login from './Login_v'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  render: h => h(Login)
})
