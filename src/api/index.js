// api接口的统一管理:使用分别暴露
import request from './request'
import mockRequest from './mockAjax'
// 三级联动的接口
export const getBaseCategoryList =  () => request({url:'product/getBaseCategoryList',method:'get'})

// 获取list的接口
export const getList = (data) => request({url:'list',method:"post",data})

// mock获取listContainer的数据
export const getBanner = () => mockRequest({url:"/banner",method:"get"})
// mock获取floor数据
export const getFloor = () => mockRequest({url:'/floor',method:'get'})