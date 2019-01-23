/**
* http配置
*/
// 引入axios以及iview中的Spin(加载)和message组件
import axios from 'axios'
import iView ,{Spin}from 'iview';
// import { Spin, Message } from 'iview'

// 超时时间
axios.defaults.timeout = 5000
// http request 拦截器
axios.interceptors.request.use(

    config => {   //请求时的操作  
        //例如：可以添加Spin(加载)组件
        // iView.Spin.show()
        // setTimeout(() => {
        //     iView.Spin.hide();
        // }, 3000);
        var token = localStorage.getItem('token')
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `Bearer ${token}`;   //  ``  es6新语法
        }else{
            // console.log('token不存在')
        }
        return config;
    },
    error => {   //请求错误时的操作    
        //例如：可以添加message组件（加载超时）
        return Promise.reject(error);
    }

);

// http response 拦截器
axios.interceptors.response.use(
  
    response => { //响应成功时的操作
        //例如：关闭加载组件
        // iView.Spin.hide()
        if (response) {
            switch (response.data.code) {
                case -9:
                    // 后台返回 -9表示没有权限 清除token信息并跳转到登录页面
                    localStorage.setItem('token','')
                case -10:
                    // 后台返回 -10表示没有权限 清除token信息并跳转到登录页面
                    localStorage.setItem('token','')    
            }
        }
        return response;
    },
    error => {   //响应失败时的操作
        //例如：可以添加message组件（加载失败）
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 后台返回 401 清除token信息并跳转到登录页面
                    localStorage.setItem('token','')
            }
        }
        return Promise.reject(error.response.msg)   // 返回接口返回的错误信息
    }

);

export default axios