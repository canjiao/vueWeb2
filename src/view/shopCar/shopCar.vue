<template>
    <div class="shopCar">

        <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="item.selected" @change="selectChange(item.id,item.selected)"></mt-switch>
                    <img src="../../assets/images/menu4.png" alt="">
                    <div class="info">
                        <h4>标题</h4>
                        <p>
                            <span class="price">￥{{item.price}}</span>
                            <span class="mui-numbox" data-numbox-min="1">
                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                <input class="mui-input-numbox" type="number" :value="item.num" @change="goodsNumChange(item.id,index)" ref="input" readonly>
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                            </span>
                            <a href="#" @click.prevent="remove(item.id)">删除</a>
                        </p>
                    </div>    
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="payMoney">
                        <p>总计（不含费用）</p>
                        <p>已勾选商品 <strong class="red">￥{{$store.getters.allGoodsNumAndPrice_select.allNum}}</strong> 件，
                            总价：<strong class="red">￥{{$store.getters.allGoodsNumAndPrice_select.allPrice}}</strong></p>
                    </div>
                    <mt-button type="danger">结算</mt-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            goodsList:this.$store.state.goodsMsg,//从vuex中获取已加入购物车的商品
        }
    },
    methods: {
        //商品数量改变
        goodsNumChange(id,index){
            // console.log(id+"    "+this.$refs.input[index].value)
            this.$store.commit("changeGoodMsg_num",{id,num:this.$refs.input[index].value})
        },
        //选择状态改变
        selectChange(id,selectStatus){
            this.$store.commit("changeGoodMsg_select",{id,selected:selectStatus})
        },
        //删除商品信息
        remove(id){
            this.$store.commit("removeGoodMsg",id)
        }
    },
    mounted () {
        this.$nextTick(()=>{
            this.mui(".mui-numbox").numbox();
            this.mui(".mui-numbox").numbox().setOption('max',10)
        })
    }
}
</script>
<style lang="less">
    .shopCar{
        .mui-card-content-inner{
            display: flex;justify-content: space-between;
            align-items: center;
        }
        img{width: 60px;height: 60px;margin: 0 5px;}
        .info{
            flex:1;
            h4{font-size: 15px;}
            p{margin-bottom: 0;}
            .price{color: red;font-size: 16px;}
            .mui-numbox{height: 30px;margin: 0 20px 0 10px;}
            a{color: #007aff;}
        }
        .payMoney{
            strong{color: red;font-size: 18px;}
        }
    }
</style>


