<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsList/newsId">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ascdn.bdstatic.com/devplat/static/index/img/tab1-icon1_be6022b.png"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间:2018-12-12 12:12</span>
              <span>点击:0次</span>   
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ascdn.bdstatic.com/devplat/static/index/img/tab1-icon1_be6022b.png"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间:2018-12-12T12:12:28.000Z</span>
              <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ascdn.bdstatic.com/devplat/static/index/img/tab1-icon1_be6022b.png"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{domain | dataFormat('YYYY-MM-DD')}}</span>
              <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domain: "2018-12-12T12:12:45.000Z",
      newsId :12
    };
  },
};
</script>

<style lang="scss" scoped>
.mui-table-view{
    li {
        h1 {
            font-size: 14px;
        }

        .mui-ellipsis {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
