import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/HomeContainer'
import member from '@/components/tabbar/MemberContainer'
import search from '@/components/tabbar/SearchContainer'
import shopcar from '@/components/tabbar/ShopcarContainer'
import NewsList from '@/components/news/NewsList.vue'
import newsinfo from '@/components/news/newsinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home' },
    {path: '/home',name: 'home',component: home},
    {path: '/member',name: 'member',component: member},
    {path: '/search',name: 'search',component: search},
    {path: '/shopcar',name: 'shopcar',component: shopcar},
    {path: '/home/NewsList',name: 'NewsList',component: NewsList},
    {path: '/home/newsinfo/:id',name: 'newsinfo',component: newsinfo},
  ]
})
