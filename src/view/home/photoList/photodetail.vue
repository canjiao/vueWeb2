<template>
    <div class="photodetail">
        <!-- 标题 -->
        <div class="title">
            <h4>{{item.title}}</h4>
            <p>
                <span>发表时间：{{item.time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</span>
                <span>点击：{{item.tapNum}}次</span>
            </p>
        </div>
        <!-- 图片缩略图 -->
        <vue-preview :slides="imglist" @close="handleClose" class="imgPreview"></vue-preview>   
        <!-- 内容 -->
        <div class="newcontent" v-html="item.content"></div>
        <!-- 评论 -->
        <comment :id=id></comment>
    </div>
</template>
<script>
import comment from "../../../components/comment"
export default {
    data () {
        return {
            id:this.$route.params.id,
            imglist: [],
            item:{}
        }
    },
    components:{
        comment,
    },
    methods: {
        handleClose () {
            console.log('close event')
        }
    },
    created(){
        //获得缩略图
        this.$http.post("/photodetail/imgPreview",{"id":this.id})
        .then(res=>{
            let arr = res.data.imglist;
            arr.forEach(item => {
                item.msrc=item.src;
                item.w=900;
                item.h=600;
            });
            this.imglist=arr;
        })
        //获取文章内容
        this.$http.post("/photodetail",{"id":this.id})
        .then(res=>{
            this.item=res.data.article
        })
    }
}
</script>
<style lang="less">
    .photodetail{
        padding: 5px;
        .title{ 
            border-bottom: 1px solid #eee;
            h4{text-align: center;};
            p{display:flex; justify-content: space-between; align-items: center;margin-top: 10px;}
        }
        .imgPreview{
            .my-gallery{
                display: flex;justify-content: flex-start ; align-items: center; flex-wrap: wrap;
                figure{
                    margin: 1%;width: 23%;
                    img{width: 100%;height: auto;display: block;}
                }
            }
        }
    }
</style>


