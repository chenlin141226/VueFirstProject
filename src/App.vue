<template>
  <div id="app" class="app-container">
    <!-- 顶部 Header 区域  -->
    <mt-header fixed title="ManBetX.Vue项目"></mt-header>
    <!--  中间的陆 路由router-view 区域 -->
    <!-- 底部 Tabbar 区域 -->
    <!-- <router-view/> -->
    <h1>1234</h1>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App1'
}
</script>

<style lanh="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>
