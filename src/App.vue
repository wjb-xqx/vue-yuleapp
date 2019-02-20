<template>
  <div id="app">
    <div class="app-container">
      <!-- 顶部 Header 区域 -->
      <header class="header">娱乐商城
        <span @click="goBack" v-show="flag">返回</span>
      </header>
      <!-- 中间的 路由 router-view 区域 -->
      <transition>
			  <router-view></router-view>
		  </transition>
      <!-- 底部 Tabbar 区域 -->
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/member">会员</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" info="5" 
        id="badge" to="/shopcar">购物车</van-tabbar-item>
        <van-tabbar-item icon="search" to="/serach">搜索</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
    return {
      active: 0,
      flag: false
    }
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
     goBack() {
      // 点击后退
      this.$router.go(-1);
    },
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home" || newVal === "/member" ||newVal === "/search" || newVal === "/shopcar") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.header {
  z-index: 999;
  max-width: 100%;
  background-color: skyblue;
  color:#fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 40px;
  >span {
    position: absolute;
    left: 3px;
  }
}
.item {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  >li {
    float: left;
  }
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
