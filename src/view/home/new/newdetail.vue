<template>
    <div class="newdetail">
        <!-- 新闻标题 -->
        <div class="title">
            <h4>{{newObj.title}}</h4>
            <p>
                <span>发表时间：{{newObj.time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</span>
                <span>点击：{{newObj.tapNum}}次</span>
            </p>
        </div>
        <!-- 内容 -->
        <div class="newcontent" v-html="newObj.content"></div>
        <!-- 评论 -->
        <comment :id=id></comment>
    </div>
</template>
<script>
import { Toast,Indicator } from 'mint-ui';

import comment from "../../../components/comment";
export default {
    data () {
        return {
            id:this.$route.params.id,//获取动态路由中的id值
            newObj:{
                title:"新闻标题",
                time:new Date(),
                tapNum:1,
                content:"<p>这是文章的内容</p>"
            },
            resArr:[],
        }
    },
    components:{
        comment,  //评论子组件
    },
    created(){
        Indicator.open('加载中...');
        // this.$http.post(this.url+'请求地址',{id:this.id})
        this.$http.post('http://localhost/laravel/public/index.php/api/index/getbabydetial',{id:9})
        .then(res=>{
            this.newObj=res.data
        })
        .then(res=>{
            console.log(111)
        })
        .catch(err=>{
            Indicator.close();
            Toast('当前网络不佳,数据请求失败');
        })
    },
}
</script>
<style lang="less">
    .newdetail{
        padding: 5px;
        .title{ 
            border-bottom: 1px solid #eee;
            h4{text-align: center;};
            p{display:flex; justify-content: space-between; align-items: center;margin-top: 10px;}
        }
    }
</style>


