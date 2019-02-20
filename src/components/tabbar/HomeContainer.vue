<template>
	<div>
			<!-- 轮播图 -->
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :src="image.img" />
			</van-swipe-item>
		</van-swipe>
		<!-- 8宫格 -->
		<ul class="nav clearfix">
			<li>
				<router-link tag="a" to="/home/newsList">
					<img src="./images/menu1.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li>
				<router-link tag="a" to="/home/photolist">
					<img src="./images/menu2.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li>
				<router-link tag="a" to="/home/goodsList">
					<img src="./images/menu3.png" alt="">
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
			<li>
				<a>
					<img src="./images/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</a>
			</li>
			<li>
				<a>
					<img src="./images/menu5.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</a>
			</li>
			<li>
				<a>
					<img src="./images/menu6.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:"HomeContainer",
	data() {
		return {
			images: Array,
		}
	},
	created() {
		this.getLunbotu()
	},
	methods: {
		getLunbotu () {
			this.$axios.get('static/mock/banner.json')
			.then(res=>{
				// console.log(res.data.data)
				this.images = res.data.data
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
	
}
</script>

<style lang="less" scoped>
// 轮播图
.van-swipe {
	width: 100%;
	height: 200px;
	img {
		width: 100%;
		height: 100%;
	}
}
//8宫格
.nav {
	margin-top: 10px;
	margin-bottom: 10px;
	>li {
		width: 33.33%;
		text-align: center;
		margin-top: 10px;
		float: left;
		>a {
			display: inline-block;
			>img {
				width: 50%;
			}
			>.mui-media-body {
				font-size: 14px;
				line-height: 30px;
			}
		}
	}
}
</style>

