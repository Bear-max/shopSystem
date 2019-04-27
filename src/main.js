//引入
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 1.引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from './pages/Login'
import Admin from './pages/Admin'
// 4.引入axios
import Axios from 'axios';
// 5.把axios绑定到vue实例的属性$axios
Vue.prototype.$axios = Axios;

//注册路由器
Vue.use(VueRouter)





//注册组件
Vue.use(ElementUI);
//配置路由
const routes = [
    { path: '/login', component: Login },
    { path: '/admin', component: Admin }
]
const router = new VueRouter({ routes })






Vue.config.productionTip = false
    //根实例
new Vue({
    render: h => h(App),
    router,


}).$mount('#app')