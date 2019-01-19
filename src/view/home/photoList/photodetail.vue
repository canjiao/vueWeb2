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
            item:{
                title:"新闻标题",
                time:new Date(),
                tapNum:1,
                content:"<p>这是文章的内容</p>"
            }
        }
    },
    components:{
        comment,
    },
    methods: {
        
    },
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
    }
</style>


