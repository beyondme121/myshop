// 包含多个接口的请求函数的模块
// 根据接口文档, 编写多个导出的接口函数
// 每一个函数的返回值 都是 axios请求封装之后的promise对象
import ajax from './ajax'
const BASE_URL = '/api';
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => {
    ajax.get(`/position/${geohash}`)
}
// 2、获取食品分类列表
export const reqFoodCategorys = () => {
    ajax.get('/index_category')
}
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => {
    ajax.get('/shops', {longitude, latitude})
}
// 4、根据经纬度和关键字搜索商铺列表
// 5、获取一次性验证码
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出