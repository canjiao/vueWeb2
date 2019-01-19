<template>
    <div class="newlist">
        
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/new/newdetail/'+id">
                    <img class="mui-media-object mui-pull-left" src="https://p0.ssl.qhimgs4.com/dmfd/125_71_/t01ab439cca3cf7a038.jpg?size=640x960">
                    <div class="mui-media-body">
                        <div>幸福</div>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{new Date() | dataFormat('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span>点击：0次</span>
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
            id:1,
        }
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


