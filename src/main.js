import Vue from 'vue'
import App from './App.vue'

//mock数据模拟
import mock from './mock/mock.js'

//导入axios
import axios from './axios/axios.js'
Vue.prototype.$http=axios
Vue.prototype.url='这里可以是网站上线前测试的域名'

//导入路由
import router from './router/index.js'

//导入vuex
import store from './store/index.js'

//导入iview及css并use使用
import Iview from "iview"
import 'iview/dist/styles/iview.css';
Vue.use(Iview)
//导入ivew-area联动地区选择
import iviewArea from 'iview-area';
Vue.use(iviewArea);

// 导入Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入vue-touch
import VueTouch from 'vue-touch/dist/vue-touch.js';
Vue.use(VueTouch, {name: 'v-touch'});

//导入mui
import './assets/mui/css/mui.css';
import './assets/mui/css/icons-extra.css';
import mui from'./assets/mui/js/mui.js';
Vue.prototype.mui=mui

//导入node.js中的时间格式转换插件
import moment from "moment"                //根据过滤器传过来的参数格式来转换成对应格式
Vue.filter("dataFormat", function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
