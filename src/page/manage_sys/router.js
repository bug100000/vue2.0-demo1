import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from './spa/Home.vue'
// import List from './spa/List.vue'
// import Upload from './spa/Upload.vue'
// import RichText from './spa/RichText.vue'
// import Vuex from './spa/Vuex.vue'
// const Home = r => require.ensure([], () => r(require('./spa/Home.vue')), '/')
// const List = r => require.ensure([], () => r(require('./spa/List.vue')), '/List')
// const Upload = r => require.ensure([], () => r(require('./spa/Upload.vue')), '/Upload')
// const RichText = r => require.ensure([], () => r(require('./spa/RichText.vue')), '/RichText')
// const Vuex = r => require.ensure([], () => r(require('./spa/Vuex.vue')), '/Vuex')

Vue.use(Router)

// 使用路由懒加载
function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `./spa/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: loadView("Home")
      // component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: loadView("List")
      // component: List
    },
    {
      path: '/upload',
      name: 'Upload',
      component: loadView("Upload")
      // component: Upload
    },
    {
      path: '/rich_text',
      name: 'RichText',
      component: loadView("RichText")
      // component: RichText
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: loadView("Vuex")
      // component: Vuex
    }
  ]
})
