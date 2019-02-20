<template>
    <div class="info">
      <!-- 轮播图 -->
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
						<img :src="image.img" />
				</van-swipe-item>
			</van-swipe>

			<div class="pai">
				<h3>小米 红米Redmi Note7 幻彩渐变AI双摄 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机</h3>
				<p class="prices">
				市场价：	<span>￥{{888}}</span>
				销售价：	<span>￥{{666}}</span>
				</p>

				<div class="num">
					<num-box @getcount="getSelectedCount"></num-box>
					<transition 
					  @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
						<span class="xiaoqiu" v-show="ballFlag" ref="ball"></span>
					</transition>
				</div>
				
				<div class="butto">
					<button>立即购买</button>
					<button @click="addToShopCar">加入购物车</button>
				</div>
			</div>

			<!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" >
          <p>商品货号：SD2932451204</p>
          <p>库存情况：60件</p>
          <p>上架时间：2017-01-01</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <!-- <span  @click="goDesc(id)">图文介绍</span>
        <span @click="goComment(id)">商品评论</span> -->
				<router-link tag="span" to="/home/goodsdesc">图文介绍</router-link>
        <router-link tag="span" to="/home/goodscomment">商品评论</router-link>
      </div>
    	</div>
    </div>
</template>

<script>
import numBox from '@/base/numbox/numbox'
export default {
	data() {
		return {
			images: Array,
			ballFlag:false,// 控制小球的隐藏和显示的标识符,
			prices:666,//商品单价
			selectedCount:1//购买数量
		}
	},
	created() {
		this.getLunbotu()
	},
	methods: {
		getLunbotu () {
			this.$axios.get('static/mock/goodsInfo.json')
			.then(res=>{
				// console.log(res.data.data)
				this.images = res.data.data
			})
			.catch(error=>{
				console.log(error)
			})
		},
		goDesc(id) {
			// 点击使用编程式导航跳转到 图文介绍页面
      this.$router.push({ name: "goodsdesc", params: { id } });
		},
		goComment(id) {
			 // 点击跳转到 评论页面
      this.$router.push({ name: "goodscomment", params: { id } });
		},
		addToShopCar() {
			// 添加到购物车
			this.ballFlag = !this.ballFlag;
			 // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
      // 拼接出一个，要保存到 store 中 car 数组里的 商品信息对象
      var goodsinfo = {
        id: this.id,
        count: this.selectedCount,
        price: this.prices,
        selected: true
			};
			// 调用 store 中的 mutations 来将商品加入购物车
      this.$store.commit("addToCar", goodsinfo);
		},
		getSelectedCount(count) {
      // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
      this.selectedCount = count;
      console.log("父组件拿到的数量值为： " + this.selectedCount);
		},
		 beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
	},
	components: {
		numBox
	}
}
</script>

<style lang="less" scoped>
.info {
	position: absolute;
	top: 40px;
	bottom: 50px;
	left: 0;
	right: 0;
	background-color: #eee;
}
// 轮播图
.van-swipe {
	box-shadow: 2px 2px  #eee;
	width: 96%;
	box-sizing: border-box;
	background-color: #fff;
	height: 200px;
	margin: 0 auto;
	img {
		width: 100%;
		height: 100%;
	}
}
.pai {
	width: 96%;
	margin: 10px auto;
	background-color: #fff;
	padding: 15px 10px;
	box-sizing: border-box;
	font-size: 16px;
	>h3 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		line-height: 20px;
		margin-bottom: 15px;
	}
	>.prices {
		font-size: 14px;
		margin-bottom: 10px;
		>span:nth-child(1) {
			text-decoration:line-through;
		}
		>span:nth-child(2) {
			font-size: 16px;
			color:red;
		}
	}
	>.num {
		width: 100%;
		height: 40px;
		position: relative;
		>.xiaoqiu {
			display: inline-block;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-color: red;
			position: absolute;
			left: 40%;
			top: 0px;
		}
	}
	>.butto {
		font-size: 14px;
		>button:nth-child(1) {
			padding: 5px 8px;
			background-color: skyblue;
		}
		>button:nth-child(2) {
			padding: 5px 8px;
			background-color: orangered;
		}
	}
}
.mui-card {
	width: 96%;
	margin: 10px auto;
	background-color: #fff;
	padding: 15px 10px;
	box-sizing: border-box;
	font-size: 16px;
	>.mui-card-header,.mui-card-content {
		line-height: 30px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
	}
}
.mui-card-footer {
	margin: 20px 0 50px;
	>span{
		width: 90%;
		margin: 0 auto;
		line-height: 40px;
		text-align: center;
		margin-bottom: 10px;
		display: block;
		border: 1px solid skyblue;
		&:nth-child(1) {
			color: skyblue;
		}
		&:nth-child(2) {
			border: 1px solid orangered;
			color: orangered;
		}
	}
}
</style>
