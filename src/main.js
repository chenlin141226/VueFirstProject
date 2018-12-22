// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由
import router from './router'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name, SwipeItem)


import 'mint-ui/lib/style.css'

//引入底部tab的样式
import './lib/mui-master/dist/css/mui.min.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'
import './lib/mui-master/examples/hello-mui/fonts/mui-icons-extra.ttf'

import axios from 'axios'
import {post,fetch,patch,put} from './api/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
