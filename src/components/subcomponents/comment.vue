<template>
    <div class ="cmt-container">
         <h3>发表评论</h3>
         <hr>
         <textarea placeholder="请输入评论的内容"></textarea>
         <mt-button type="primary" size="large">发表评论</mt-button>
         <div class="cmt-list">
             <div class="cmt-item">
                 <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:12
                 </div>
                 <div class="cmt-body">
                        天王盖地虎，小鸡炖蘑菇
                 </div>
             </div>
         </div>

         <mt-button type="danger" size="large" plain>发表评论</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
     .cmt-container {
         h3 {
             font-size: 18px;
         }

         textarea {
             font-size: 14px;
             height: 85px;
              margin: 0;
         }

         .cmt-list {
             font-size: 13px;
             .cmt-item {
                 .cmt-title {
                     line-height: 30px;
                 }

                 .cmt-body {
                     line-height: 30px;
                     
                 }
             }
         }
     }
</style>
