<template>
    <div class="news-info-container">
        <h3 class="title">标题</h3>
        <p class="subtitle">
            <span>发表时间:2018-12-12 12:45:00</span>
            <span>点击:6次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content">sadasda</div>
        <comment-box></comment-box>
    </div>
</template>

<script>
import commentBox from '@/components/subcomponents/comment'
export default {
    data(){
        return{
    
        }
    },
    components :{
        commentBox,
    }
}
</script>
<style lang="scss" scoped>
  .news-info-container {
      padding: 0 4px;
      .title {
          font-size: 16px;
          text-align: center;
          margin: 15px 0;
          color: red
      }

      .subtitle {
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          color: #226aff;
      }

      .content {

      }
  }
</style>
