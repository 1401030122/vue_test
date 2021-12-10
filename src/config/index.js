module.exports = {

    dev: {
      // Paths
      port: 8888,


      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      // *********代理跨域 主要代码**********
      proxyTable: {
        '/api': {  //匹配接口路径中的 /api，可以随意命名
          target: 'http://localhost:8084', //目标接口地址，设置调用的接口域名和端口号 别忘了加http、https
          changeOrigin: true, //是否跨域
          secure: true, // 允许https请求，https必须添加这个设置
          pathRewrite: {
            '/api': '' // 路径重写 将 target 中的目标接口地址重写为 /api，这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
    }
    },
    }
}
