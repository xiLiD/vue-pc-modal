module.exports = {
  page: 'control',
  title: '客户维表查询',
  package: 'control',
  // page: 'index',
  // title: '指挥工作台',
  // package: 'controlers',
  LOGIN_KEY: '0', // 0 => 关闭单点登录 1 => 开启单点登录
  utilsConfig: {
    console: false, // false => 关闭所有 被webpack 打包 console输出
    vconsole: false // true 引入 vconsole 出现绿标
  }
}