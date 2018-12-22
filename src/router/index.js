import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
Vue.use(Router)




//export default Router 是把路由对象暴露出去
export default new Router({
  routes: [    //配置路由规则
   {path:'/',redirect:'/home'},
   {path:'/home',component:HomeContainer},
   {path:'/rember',component:MemberContainer},
   {path:'/shopcar',component:SearchContainer},
   {path:'/serch',component:ShopcarContainer}
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫做 router-cative-aclass
})
