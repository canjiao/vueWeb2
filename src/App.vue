<template>
  <div id="app">
      <!-- <transition-group name="left"> -->
        <!-- header -->
        <mt-header fixed title="vue·项目" key="header">
          <mt-button icon="back" slot="left" @click.native="returnTo" v-show="flag">返回</mt-button>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <!-- 页面主体区 -->
        <transition name="left">
          <router-view key="body" style="width:100%"></router-view>
        </transition>
        <!-- footer -->
        <nav class="mui-bar mui-bar-tab" key="footer">
          <router-link class="mui-tab-item-llb" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item-llb" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="mui-tab-item-llb" to="/shopCar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="mui-badge">{{$store.getters.allGoodsNum}}</span></span>
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item-llb" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
          </router-link>
        </nav>
      <!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      selected:'首页',
      flag:true,

      /* routePath:this.$route.path   
          注意:获取当前的路由路径用this.$route.path ;在各个子组件均能这样定义获取到当前的路由路径
      */
    }
  },
  watch:{
    //监听当前页面的路由路径变化  ps:这里后面得写function(){};用es6的箭头函数()=>{}不起作用，亲测 不知道为啥
    "$route.path":function(newVal){
      console.log(this.$route.path)
      if(newVal=="/home"){
        this.flag=false;
      }else{
        this.flag=true;
      }
    },
  },
  methods:{
    returnTo(){
      this.$router.go(-1);
    }
  },
  created () {
    
  }
};
</script>

<style>
  
  #app{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
  body{
    background: #fff !important;
  }
  .mint-header.is-fixed{
    z-index: 99!important;
  }
  div a{color: #333;}
  .left-enter{
    opacity: 0;
    transform: translate(100%,0)
  }
  .left-leave-to{
    opacity: 0;
    transform: translate(-100%,0);
    position: absolute;
  }
  .left-enter-active,.left-leave-active{
    transition: all 0.5s linear;
  }

  /* 修改底部栏在添加了横向滚动条(mui中的tab-top-webview-main组件)无法点击切换的问题，应该是类名与js中的有冲突，所以修改类名 */
  .mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
