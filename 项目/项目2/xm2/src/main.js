import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
import Vuex from "vuex"
Vue.use(Vuex)
var store=new Vuex.Store({
  //共享数据容器
    state:{
      cartCount:sessionStorage.getItem("cartCount")||0
    },
  //操作共享方法
    mutations:{
      increment(state){
        state.cartCount++;
        sessionStorage.setItem("cartCount",state.cartCount);
      }
    },
  //获取共享数据方法
    getters:{
      optCartCount:function(state){
        return state.cartCount;
      }
    }
})
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import {Button,Header,Swipe,SwipeItem} from 'mint-ui'
import axios from "axios"
import qs from "qs"
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
Vue.prototype.qs=qs;

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')