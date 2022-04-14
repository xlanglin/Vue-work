import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import login from '@/components/login'
import news from '@/components/news'
import game from '@/components/game'
import detail from '@/components/gamedetail/gamedetail'
import newsdetail from '@/components/gamedetail/newsdetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/news/:id',
      name: 'newsdetail',
      component: newsdetail
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/game/:id',
      name: 'gameDetail',
      component: detail
    },
  ]
})
