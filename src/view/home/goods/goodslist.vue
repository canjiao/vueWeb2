<template>
    <div class="goodslist">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="flag">
        <ul>
            <li v-for="item in goodslist" :key="item.id">
                <router-link class="goodsinfo" to="" tag="div">
                    <img :src="item.imgurl" alt="">
                    <h4>{{item.title}}</h4>
                    <div class="goodsli_bd">
                        <p>
                            <span class="newsprice">￥{{item.newsprice}}</span>
                            <span class="oldsprice">￥{{item.oldsprice}}</span>
                        </p>
                        <p>
                            <span>{{item.status}}</span>
                            <span>剩余{{item.num}}件</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        </mt-loadmore> 
    </div>
</template>
<script>
export default {
    data () {
        return {
            pageIndex:0,
            goodslist:[],
            flag:false,
            allLoaded:false,
        }
    },
    methods: {
        //加载更多
        loadBottom(){
            // this.getCatesList()
            setTimeout(() => {
                console.log(111)
                this.$refs.loadmore.onBottomLoaded();
            }, 5000);
        },
        getGoodslist(){
            this.$http.post('/goodslist',{'pageIndex':this.pageIndex})
            .then(res=>{
                this.goodslist=res.data.goodslist;
            })
        }
    },
    created () {
        this.getGoodslist();
    }       
}
</script>
<style lang="less">
    .goodslist{
        ul{display: flex; justify-content: flex-start; flex-wrap: wrap;padding:0 5px;}
        li{
            width: 50%;padding: 10px 5px 0;list-style: none;
            .goodsinfo{
                padding:2px; border: 1px solid #ccc; box-shadow: 0 0 5px #f80;
                img{width: 100%;height: 200px;display: block;}
                h4{
                    height: 45px;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 1.4;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .goodsli_bd{
                    padding: 4px; background: #eee;
                    p{
                        margin-bottom: 0;
                        .newsprice{font-size:18px; color: #f80;}
                        .oldsprice{font-size: 14px;text-decoration: line-through;margin-left: 15px;}
                    }
                    p:nth-child(2){
                        display: flex;justify-content: space-between;align-items: center;margin-top: 5px;
                    }
                }
            }
        }
    }
</style>


