<template>
  <div class="home">

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><span style="background:red;">Slide 1分支修改</span></div>
        <div class="swiper-slide"><span style="background:yellow;">Slide 2</span></div>
        <div class="swiper-slide"><span style="background:blue;">Slide 3</span></div>
      </div>
    </div>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newlist">
                <img src="../../assets/images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photoList">
                <img src="../../assets/images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodslist">
                <img src="../../assets/images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 

    <!-- <HelloWord></HelloWord> -->
  </div>
</template>
<script>
//导入swiper
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.css';
//导入jq
import $ from 'jquery';
// import HelloWorld from "../components/HelloWorld.vue"

import { mapState, mapMutations } from "vuex"; //要用vuex中定义的数据和方法必须先导入，固定写法

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    // HelloWorld,
  },
  watch: {},
  computed: {
    ...mapState(["msg"]) //'msg'自定义在vuex state里面的数据。 ...mapState(['',''])
  },
  methods: {
    ...mapMutations(["setMsg"]) //'setMsg'自定义在vuex mutations里面的方法。 ...mapMutations(['',''])固定写法
  },
  filters: {},
  created() {
    // this.$http.post('url',{})
    // .then(res=>{
    //     console.log(res.data)
    // })
    
  },
  mounted() {
    var swiper = new Swiper('.swiper-container',{
      autoplay:true,
    });
    $('h3').css({'color':'red',});
  }
};
</script>
<style lang="less" scoped>
.home {
  .swiper-container{
    width: 100%;overflow-x: hidden;height:180px;text-align: center;
    span{display: block;height: 100%;line-height: 180px;color: #fff;}
  }
  .mui-grid-view{
    .mui-table-view-cell{
      border-top: none;
      border-left: none;
      background-color: #fff;
      img{width: 60px;height: 60px;}
      .mui-media-body{font-size: 13px;}
    }
  }
}
</style>


