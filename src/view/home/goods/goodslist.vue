<template>
    <div class="goodslist" id="goodslist">
        <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="flag"> -->
        <ul>
            <li v-for="item in goodslist" :key="item.id">
                <router-link class="goodsinfo" :to="'/home/goodsdetail/'+item.id" tag="div">
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
        <div class="loadImg" v-show="loading"><img src="../../../assets/images/loading.gif" alt="">正在加载中...</div>
        <!-- </mt-loadmore>  -->
    </div>
</template>
<script>
//这是导入自写的一个上拉加载更多的组件
import upLoadMore from "../../../components/upLoadMore.vue"

export default {
    data () {
        return {
            pageIndex:1,
            goodslist:[],
            flag:false,
            loading:false,//正在加载中
            allLoaded:false, //全部加载了,无更多数据
        }
    },
    methods: {
        //加载更多  这是mint-ui的loadmore 注意：用这个组件需要给其父元素一个高度，且父元素比子元素的高度小
        loadBottom(){
            // this.getGoodslist()
            setTimeout(() => {
                //加载完成后要加上这个，让组件重新计算高度
                this.$refs.loadmore.onBottomLoaded();
            }, 5000);
        },

        //获得商品列表
        getGoodslist(){
            this.$http.post('/goodslist',{'pageIndex':this.pageIndex})
            .then(res=>{
                this.goodslist=this.goodslist.concat(res.data.goodslist);
                this.loading=false;
            })
        },
        //滚动条到达底部后上滑加载更多
        getMore(){
            //使用自写的加载更多的组件的方法 参数1：滑动哪一个元素需要加载更多  参数2：手指松开后的回调函数
            upLoadMore.upLoadMore(".goodslist",()=>{
                //这里的回调函数触发的条件是：1.滚动条到达底部 2.向上滑动的距离大于120(默认值可修改)
                console.log("回调函数")
                this.pageIndex++;
                this.getGoodslist();
                this.loading=true;
            })
        }
    },
    mounted () {
        this.getGoodslist();
        //这里只是初始化一下这个滑动组件；页面刚进来的时候由于没有滑动屏幕所以并没有执行加载更多里面的回调函数
        this.getMore();
    }       
}
</script>
<style lang="less">
    .goodslist{
        .loadImg{
            line-height: 32px;
            font-size: 13px;
            text-align: center;
            margin-bottom: -32px;
            img{vertical-align: bottom;}
        }
        // height: calc(100vh - 90px);
        .mint-loadmore{padding-bottom: 55px;}
        ul{display: flex; justify-content: flex-start; flex-wrap: wrap;padding:0 5px 10px;}
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


