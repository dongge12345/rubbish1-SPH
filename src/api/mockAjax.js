import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// axios二次封装步骤：
// 1.使用axios的create方法创建一个实例(本质就是一个axios),可以进行配置后作为新的axios进行暴露。
const request = axios.create({
    baseURL:'/mock', // 配置一：在每个url的基础路径上带上这个baseURL
    timeout:5000, // 配置二：请求超时的时间。

})
// 请求拦截器，config
request.interceptors.request.use((config)=>{
    // config是一个配置对象，对象有个属性headers请求头很重要
    nprogress.start()
    return config
})
// 响应拦截器，成功与失败的回调
request.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(err)=>{
    nprogress.done()
    return Promise.reject(new Error('faile'))
})

export default request