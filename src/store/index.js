import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: { //相当于data  存储数据的
        msg: '',
        goodsMsg:JSON.parse( localStorage.getItem("goodsMsg") ) || [],
    },
    mutations: { //相当于methods  对state中的数据进行操作的方法
        setMsg(state, msgStr) { //第一个参数state 是固定写法 就是上面的state
            state.msg = msgStr;
        },
        setGoodsMsg(state,opt){ //存储选择的商品信息
            let flag = false;
            state.goodsMsg.some(item=>{
                if(item.id==opt.id){
                    flag = true;
                    item.num += opt.num;
                    return true;
                }
            })
            if(!flag){
                state.goodsMsg.push(opt);
            }
            //把商品信息本地存储
            localStorage.setItem("goodsMsg",JSON.stringify(state.goodsMsg));
        }
    },
    getters:{  //相当于computed
        allGoodsNum(state){
            let all = 0;
            state.goodsMsg.forEach(item => {
                all +=item.num
            });
            return all;
        }
    }
})
export default store