<template>
    <div class="photoList">
        
        <!-- 横向滑动导航条 -->
        <div class="mui-slider">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item" :class="{'mui-active':item.id==0}" v-for="item in cates" :key="item.id" @click="getCatesList(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表展示区域 -->
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="flag">
        <ul class="P_T_list">
            <router-link :to="'/home/photodetail/'+item.id" v-for="item in list" :key="item.id" tag="li">
                <Card>
                    <img v-lazy="item.url" class="lazy">
                    <p>{{item.introduction}}</p>
                </Card>
            </router-link>
        </ul>
        </mt-loadmore>    
    </div>
</template>
<script>
export default {
    data () {
        return {
            cates:[],
            list:[],
            flag:false,
            allLoaded:false,

        }
    },
    methods: {
        //获取图片分类导航
        getCates(){
            this.$http.post('/photoList/cates')
            .then(res=>{
                res.data.cates.unshift({id:0,"title":'全部',});
                this.cates=res.data.cates
            })
        },
        //获取图片列表
        getCatesList(catesId){
            this.$http.post('/photoList/pic',catesId)
            .then(res=>{
                this.list=res.data.listPic;
            })
        },
        //加载更多
        loadBottom(){
            this.getCatesList()
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded();
            }, 5000);
        }  
    },
    created () {
        this.getCates();
        this.getCatesList(0);
    },
    mounted () {
        this.mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style lang="less">
    * { touch-action: pan-y; }
    .photoList{
        height: calc(100vh - 90px);
        .P_T_list{
            padding: 0 10px;
            li{
                display: block;
                .ivu-card{margin-top: 10px;background: #eee;}
                .ivu-card-body{
                    padding: 0px;
                    img{display: block;width:100%;height: 250px;}
                    p{margin-bottom: 0;background:rgba(20, 16, 16, 0.4);color:#fff;position: absolute;left:0;bottom: 0;width: 100%;padding: 5px;}
                }
            }    
        }
        .mint-loadmore{margin-bottom: 50px;}
    }
    img[lazy=loading].lazy {
        width: 40px!important;
        height: 300px;
        margin: auto;
    }
</style>


