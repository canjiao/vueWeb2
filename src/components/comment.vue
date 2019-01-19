
<template>
  <!-- 评论组件 -->
  <div class="comment">
    <h4>发表评论</h4><hr>
    <textarea name="" placeholder="请输入不超过200字" maxlength="200" v-model="txt"></textarea>

    <mt-button type="primary" size="large" @click="sendComment">发表评论</mt-button>

    <!-- 评论列表 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in items" :key="index">
        <img class="mui-media-object mui-pull-left" :src="item.headUrl">
        <div class="mui-media-body">
            <div>{{item.name}}</div>
            <p>
              <span>发表时间：{{item.time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</span>
            </p>
        </div>
        <div class="commentBody">
          {{item.content}}
        </div>
      </li>
    </ul>
    <!-- 加载更多 -->
    <div class="alignCenter">
      <button type="button" data-loading-icon-position="right" class="mui-btn mui-btn-success mui-btn-outlined" @click="loading">
        <span>{{loadTxt}}</span><mt-spinner type="snake" v-show="isShow" :size="19"></mt-spinner>
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      txt:'',
      items:[
        {name:'刘文',headUrl:'https://p0.ssl.qhimgs4.com/dmfd/125_71_/t01ab439cca3cf7a038.jpg?size=640x960',time:new Date(),content:'这是一段评论'},
        {name:'刘san',headUrl:'',time:new Date(),content:'这是er段评论'},
      ],
      loadTxt:'加载更多',
      isShow:false,
      pageIndex:1
    }
  },
  components:{

  },
  methods: {
    //发送评论
    sendComment(){
      if(this.txt.trim()==''){
        Toast('评论内容不能为空');
      }else{
        this.$http.post('httpUrl',{id:this.id})
        .then(res=>{
          Toast('消息发送成功');
          this.items.unshift({
            name:'2',
            headUrl:'',
            time:new Date(),
            content:this.txt
          })
        })
      }
    },
    //获取评论数据
    getcomments(){
      this.$http.post('httpUrl',{id:this.id,pageIndex:this.pageIndex})
      .then(res=>{
        this.items=this.items.concat(res.data);
        if(this.pageIndex!=1){
          this.isShow=false;
          this.loadTxt='加载更多'
        }
      })
      .catch(err=>{
        this.isShow=false;
        this.loadTxt='加载失败,重新加载'
      })
    },
    loading(){
      this.pageIndex++;
      this.loadTxt='正在加载中...',
      this.isShow=true;
      this.getcomments();
    }
  },
  props:['id'],
  created(){
    this.getcomments();
  }
}
</script>

<style lang="less">
.comment{
  textarea{font-size: 14px;margin-top: 10px;}
  .commentBody{
    margin-left: 52px;margin-top: 10px;
  }
  li.mui-table-view-cell{
    margin-top: 10px;padding:10px 5px;
    .mui-media-object{width: 42px;background: #eee;}
    .mui-media-body{
      font-size: 14px;
    }
  }
  .mui-btn-success{display: flex;justify-content: center;align-items: center;margin: 10px auto;}
}
.fr{ float: right; }
.alignCenter{text-align: center;}
</style>

