<template>
    <div class="search">
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索">

        </mt-search>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value:'',
        }
    }
}
</script>
<style lang="less">
    .search{
        font-size: 14px;
        input[type='search']{height: 20px;text-align: left;background-color:transparent;line-height: inherit;margin-bottom: 0;font-size: 14px;}
        .mint-searchbar-inner .mintui-search{font-size: 18px;}
    }
</style>

