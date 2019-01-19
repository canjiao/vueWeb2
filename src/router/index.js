import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

//路由懒加载
const home = () => import("../view/home/home")
//直接导入路由
// inport luyouName2 from "../view/路由路径"
import shopCar from "../view/shopCar/shopCar.vue"
import member from "../view/member/member.vue"
import search from "../view/search/search.vue"
import newlist from "../view/home/new/newlist.vue"
import newdetail from "../view/home/new/newdetail.vue"
import photoList from "../view/home/photoList/photoList.vue"
import photodetail from "../view/home/photoList/photodetail.vue"

let router = new Router({
    routes: [
        //重定向
        {
            path: "/",
            redirect: "/home"
        },
        //普通路由
        {path: "/home",component: home},
        {path:"/shopCar",component:shopCar},
        {path:"/member",component:member},
        {path:"/search",component:search},
        {path:"/home/newlist",component:newlist},
        {path:"/new/newdetail/:id",component:newdetail},
        {path:"/home/photoList",component:photoList},
        {path:"/home/photodetail/:id",component:photodetail},
        /*{
            path: "/luyouName2",
            component: luyouName2,
            meta: { //路由元信息
                require_login: true, //当路由元信息meta的require_login为true；表示需要登录，跳转到登录页面
            }
        }*/
    ],
    linkActiveClass:'mui-active',   //改变路由默认高亮的类名
})
//路由全局守卫
/*
router.beforeEach((to, from, next) => {
    //把from的路由路径时时存在vuex中
    let store = router.app.$options.store;
    store.commit('setFromRouter', from.path)
    if (to.meta.require_login != undefined) { //当前路由需要登录
        //判断当前是否已经登录
        if (localStorage.getItem('token') == '' || localStorage.getItem('token') == undefined) { //没有登录，跳转到登录页面
            next('/login'); // router.push('/login')
        } else {
            next() //已登录，放行
        }
    } else {
        next()
    }
    
}
*/
export default router

