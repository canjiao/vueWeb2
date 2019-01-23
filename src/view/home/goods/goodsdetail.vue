<template>
  <div class="goodsdetail">


    <!-- 轮播图 -->
    <div class="mui-card swiper">
      <div class="mui-card-content">
        <div class="mui-card-content-inner"><img :src="goodsInfo.imgurl" alt=""></div>
      </div>
    </div>


    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="sprice">
            市场价：
            <del>￥{{goodsInfo.newsprice}}</del>销售价：
            <span class="nowsprice">￥{{goodsInfo.oldsprice}}</span>
          </p>
          <p>
            购买数量：
            <span class="mui-numbox" data-numbox-min="1">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input class="mui-input-numbox" type="number" value="1">
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </span>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!--加入购物车时的小球动画-->
    <transition @before-enter="befterEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="redball"></div>
    </transition>


    <!-- 商品详情 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.number}}</p>
          <p>库存情况：{{goodsInfo.inventory}}件</p>
          <p>上架时间：{{goodsInfo.time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</p>
        </div>
      </div>
      <div class="mui-card-footer" ref="ball">
        <mt-button type="primary" size="large" plain>商品详情</mt-button>
        <mt-button type="danger" size="large" plain>商品评价</mt-button>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      ballflag: false,
      selcetNum: 1,
      goodsInfo:{}
    };
  },
  watch: {
    "goodsInfo.inventory":{
      handler(newVal){
        setTimeout(()=>{
          this.mui(".mui-numbox").numbox().setOption('max',parseInt(newVal))
        },2000)
        
      },
      immediate:true,
      deep:true
    }
  },
  methods: {
    addToShopCar() {
      this.ballflag = !this.ballflag;
      let goodsMsg={
        id:this.$route.params.id,
        price:this.goodsInfo.newsprice,
        num:this.mui(".mui-numbox").numbox().getValue(),
        selected:true,
      }
      this.$store.commit("setGoodsMsg",goodsMsg);  //把数据交给vuex中的mutations中的方法处理
    },
    //进行半程动画的三个钩子函数
    befterEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      // getBoundingClientRect()可以获取元素距离视窗的左边和上边的值
      //获取小球在页面中的位置
      const ballObj = this.$refs.redball.getBoundingClientRect();
      //获取购物车的徽标在购物车的位置
      const badgeObj = document
        .getElementById("mui-badge")
        .getBoundingClientRect();

      //获取小球与徽标的x和y的相对距离
      const xDist = badgeObj.left - ballObj.left;
      const yDist = badgeObj.top - ballObj.top;

      el.offsetWidth; //ps：这段代码无其他作用,但是不加上这个没有动画的过渡效果
      el.style.transform = `translate(${xDist}px,${yDist}px)`; //`${}` es6的模版字符串语法
      el.style.transition = "all 1s cubic-bezier(.44,.02,1,.31)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    }
  },
  created() {
    this.$http.post("/goodsdetail",{"id":this.$route.params.id})
    .then(res=>{
      this.goodsInfo=res.data.goodsInfo;
      this.$nextTick(()=>{
        this.mui(".mui-numbox").numbox();
        this.mui(".mui-numbox").numbox().setOption('max',this.goodsInfo.inventory)
      })
    })
  },
  mounted() {
    
  }
};
</script>
<style lang="less">
.goodsdetail {
  background: #eee;
  overflow: hidden;
  .swiper{
    img{width: 100%;}
  }
  .mint-button--small{margin-right: 20px;}
  .ball {
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 50%;
    position: absolute;
    left: 153px;
    top: 396px;
    z-index: 99;
  }
  .mui-card-footer {
    display: block;
    .mint-button--large {
      margin: 10px 0;
    }
  }
}
</style>


