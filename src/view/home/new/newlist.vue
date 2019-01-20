<template>
    <div class="newlist">
        
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
                <router-link :to="'/new/newdetail/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.imgurl">
                    <div class="mui-media-body">
                        <div>{{item.title}}</div>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{new Date() | dataFormat('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span>点击：{{item.tapNum}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            newlist:[],
        }
    },
    methods:{
        //获取列表
        getNewlist(){
            this.$http.post("/newlist")
            .then(res=>{
                this.newlist=res.data.newlist;
            })
        }
    },
    created(){
        this.getNewlist();
    }
}
</script>
<style lang="less">
    .newlist{
        .mui-table-view-cell p{
            display:flex; justify-content: space-between; align-items: center;
        }
    }
</style>


