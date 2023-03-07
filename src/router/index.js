import Vue from 'vue'
import VueRouter from 'vue-router'
// 插件
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
let vueRouter =  new VueRouter({
    // 配置路由
    routes:[
        {
            path:'/',
            redirect:'/home',
            meta:{
                footer:true
            }
        },
        {
            path:"/home",
            component:Home,
            meta:{
                footer:true
            }
        },
        {
            name:"search",
            path:"/search/:keyword?",
            component:Search,
            meta:{
                footer:true
            },
            // // 传递props方式1：true，只能传递params参数
            // props:true
            // // 传递props方式2：对象写法，值什么写死了。
            // props:{
            //     a:1,
            //     b:2
            // }
            // // 传递props方式3：函数写法
            // props:($route)=>{
            //     return {
            //         keyword:$route.params.keyword,
            //         search:$route.query.search
            //     }
            // }
            // 解构方式获取params和query
            props:({query,params})=>{
                return {
                    // keyword:params.keyword,
                    // search:query.search
                    ...params,
                    ...query
                }
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                footer:false
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                footer:false
            }
        },
    ]
})
// 备份初始的push方法
let newPush = VueRouter.prototype.push
let replace = VueRouter.prototype.replace
// 重写push方法要保留允许后续的res和rej传入。当只传入一个参数config时，返回的是一个promise对象，当传入res和rej回调函数之后，返回的是undefined
VueRouter.prototype.push = function(config,resolve,reject){
    if(resolve && reject){
        newPush.call(this,config,resolve,reject)
    }else{
        newPush.call(this,config,(res)=>res.data,(err)=>{})
    }
}
VueRouter.prototype.replace = function(config,resolve,reject){
    if(resolve && reject){
        replace.call(this,config,resolve,reject)
    }else{
        replace.call(this,config,(res)=>res.data,(err)=>{})
    }
}
export default vueRouter