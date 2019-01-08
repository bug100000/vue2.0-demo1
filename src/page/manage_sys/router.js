import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from './spa/Home.vue'
import List from './spa/List.vue'
import Upload from './spa/Upload.vue'
import RichText from './spa/RichText.vue'
import Vuex from './spa/Vuex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/rich_text',
      name: 'RichText',
      component: RichText
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }
  ]
})
