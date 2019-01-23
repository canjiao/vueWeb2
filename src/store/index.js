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
        },
        changeGoodMsg_num(state,opt){  //购物车中的数量改变商品信息
            state.goodsMsg.some(item=>{
                if(item.id==opt.id){
                    item.num=parseInt(opt.num);
                    return true;
                }
            })
            //把修改的商品信息本地存储
            localStorage.setItem("goodsMsg",JSON.stringify(state.goodsMsg));
        },
        changeGoodMsg_select(state,opt){  //购物车中的选中状态改变商品信息
            state.goodsMsg.some(item=>{
                if(item.id==opt.id){
                    item.selected=opt.selected;
                }
            })
            //把修改的商品信息本地存储
            localStorage.setItem("goodsMsg",JSON.stringify(state.goodsMsg));
        },
        removeGoodMsg(state,id){   //删除商品信息
            state.goodsMsg.some((item,index)=>{
                if(item.id==id){
                    state.goodsMsg.splice(index,1);
                    return true;
                }
            })
            //把修改的商品信息本地存储
            localStorage.setItem("goodsMsg",JSON.stringify(state.goodsMsg));
        }
    },
    getters:{  //相当于computed
        allGoodsNum(state){  //获取购物车中所有商品的数量
            let all = 0;
            state.goodsMsg.forEach(item => {
                all +=item.num
            });
            return all;
        },
        allGoodsNumAndPrice_select(state){  //购物车中已勾选的商品数量及总价格
            let allNum = 0 , allPrice = 0;
            state.goodsMsg.forEach(item=>{
                if(item.selected){
                    allNum +=item.num;
                    allPrice += item.num*parseInt(item.price);
                }
            })
            return {allNum,allPrice};
        },
        
    }
})
export default store