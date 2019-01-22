<template>
    <div class="shopCar">

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="value"></mt-switch>
                    <img src="../../assets/images/menu4.png" alt="">
                    <div class="info">
                        <h4>标题</h4>
                        <p>
                            <span class="price">￥1999</span>
                            <span class="mui-numbox" data-numbox-min="1">
                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                <input class="mui-input-numbox" type="number" value="1">
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                            </span>
                            <a href="#">删除</a>
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
                        <p>已勾选商品 <strong class="red">0</strong> 件，总价：<strong class="red">￥1000</strong></p>
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
            value:true,
        }
    },
    methods: {
        
    },
    created () {
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


