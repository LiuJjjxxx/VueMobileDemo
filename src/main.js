import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store';
//api 导入
import * as api from './api/api';
//Vant 框架导入所有
import Vant from 'vant';
import 'vant/lib/index.css';
//Vant 框架注册
Vue.use(Vant);
Vue.config.productionTip = false
//api注册
Vue.prototype.$http = api


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store

})
