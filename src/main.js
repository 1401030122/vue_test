//引入Vue
import Vue from 'vue'
import VueResource from 'vue-resource'
//引入App
import App from './App.vue'
// 完整引入
// 引入ElementUI组件库
import axios from 'axios'


//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件

Vue.use(VueResource)
Vue.prototype.$axios = axios



//创建vm
new Vue({
	el:'#app',
	render: h => h(App),

})
