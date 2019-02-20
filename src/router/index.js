import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/HomeContainer'
import member from '@/components/tabbar/MemberContainer'
import search from '@/components/tabbar/SearchContainer'
import shopcar from '@/components/tabbar/ShopcarContainer'
import NewsList from '@/components/news/NewsList.vue'
import newsinfo from '@/components/news/newsinfo.vue'
import photoList from '@/components/photos/photoList.vue'
import photoInfo from '@/components/photos/photoInfo.vue'
import goodsList from '@/components/goods/goodsList.vue'
import goodsInfo from '@/components/goods/goodsInfo.vue'
import goodsdesc from '@/components/goods/goodsdesc.vue'
import goodscomment from '@/components/goods/goodscomment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home' },
    {path: '/home',name: 'home',component: home},
    {path: '/member',name: 'member',component: member},
    {path: '/search',name: 'search',component: search},
    {path: '/shopcar',name: 'shopcar',component: shopcar},
    {path: '/home/newsList',name: 'NewsList',component: NewsList},
    {path: '/home/newsinfo/:id',name: 'newsinfo',component: newsinfo},
    {path: '/home/photolist',name: 'photoList',component: photoList},
    {path: '/home/photoinfo/:id',name: 'photoInfo',component: photoInfo},
    {path: '/home/goodsList',name: 'goodsList',component: goodsList},
    {path: '/home/goodsInfo/:id',name: 'goodsInfo',component: goodsInfo},
    {path: '/home/goodsdesc',name: 'goodsdesc',component: goodsdesc},
    {path: '/home/goodscomment',name: 'goodscomment',component: goodscomment},
  ]
})
