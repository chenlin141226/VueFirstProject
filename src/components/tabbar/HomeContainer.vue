<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="items in lunbotuList" :key="items.image">
            <img :src="domain+items.image" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "HomeContainer",
  data() {
    return {
      msg: "HomeContainer",
      lunbotuList: [],
      domain :"",
    };
  },
  created() {
    this.getLunBoTu();
  },
  methods: {
    getLunBoTu() {
      this.$post("http://api.manbetxleague.com/api/index/banner").then(
        response => {
          console.log(response);
          if (response.code === 1) {
            Toast({ message: "获取数据成功",position: "middle",duration: 3000});
            this.lunbotuList = response.data.banner;
            this.domain = response.data.domain
          } else {
            Toast({message: "获取数据失败", position: "middle",duration: 3000});
          }
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// 
<style lang="scss" scoped>
// .mint-swipe
//   height 200px
//   .mint-swipe-item
//   a:nth-child(1)
//       background-color red
//   a:nth-child(2)
//     background-color blue

//   a:nth-child(3)
//     background-color cyan

.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }

    &:nth-child(2) {
      background-color: blue;
    }

    &:nth-child(3) {
      background-color: cyan;
    }

    img {
         height: 100%;
         width: 100%
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;

  img {
    width: 60px;
  }
  .mui-media-body {
    font-size: 13px
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>
