import Vue from 'vue'
import Router from 'vue-router'
import home from "./components/home"
import login from "./components/login"
import spfl from "./components/spfl"
import spxq from "./components/spxq"
import gwc  from "./components/gwc"
import spxq1 from "./components/spxq1"
import cart from "./components/cart"
import cart1 from "./components/cart1"
import center from "./components/center"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component:home},
    {path:"/login",component:login},
    {path:"/spfl",component:spfl},
    {path:"/spxq",component:spxq},
    {path:"/gwc",component:gwc},
    {path:"/spxq1",component:spxq1},
    {path:"/cart",component:cart},
    {path:"/cart1",component:cart1},
    {path:"/center",component:center}
  ]
})
