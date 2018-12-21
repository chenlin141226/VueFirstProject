// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
import 'mint-ui/lib/style.css'

//引入底部tab的样式
import './lib/mui-master/dist/css/mui.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
