<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeContainer",
  data() {
    return {
      msg: "HomeContainer"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// 
<style lang="stylus" scoped>  
.mint-swipe 
  height 200px
  .mint-swipe-item 
  a:nth-child(1)
      background-color red   
  a:nth-child(2)
    background-color blue

  a:nth-child(3)s
    background-color cyan
    // .mint-swipe {
    //    height: 200px;
    //    .mint-swipe-item {
    //      a:nth-child(1){
    //         background-color:red   
    //      }

    //      a:nth-child(2){
    //         background-color:blue   
    //      }

    //      a:nth-child(3){
    //         background-color:cyan
    //      }
    //    }
    // } 

</style>
