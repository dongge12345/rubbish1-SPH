// 这里的Vue是经过二次处理的，初次是在store的index.js文件中，用于use(Vuex)
import {Vue,store} from '@/store'
import App from './App.vue'
import nprogress from 'nprogress'
Vue.config.productionTip = false
import router from '@/router'
import '@/mock/mockServe'
nprogress.start()
nprogress.done()
let app = new Vue({
  // render函数的完整写法：
  // render: createElement=>{
  //   return createElement(App)
  // },
  // render函数的简写：
  render:createElement=>createElement(App),
  router,
  store
})
// 确定渲染的位置
app.$mount('#app') 
