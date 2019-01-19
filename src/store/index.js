import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: { //相当于data  存储数据的
        msg: '',
    },
    mutations: { //相当于methods  对state中的数据进行操作的方法
        setMsg(state, msgStr) { //第一个参数state 是固定写法 就是上面的state
            state.msg = msgStr;
        }
    }
})
export default store