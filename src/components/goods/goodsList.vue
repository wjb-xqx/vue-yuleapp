<template>
    <div class="goods-list">
			<!-- 方法1 -->
			<!-- <router-link tag="div" :to="'/goods/goodsInfo/' + item.id" 
			class="goods-item" v-for="item in goodslist" :key="item.id"">
      <img v-lazy="item.img" alt="">
      <h1 class="title">{{ item.name }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      	</div>
    	</router-link> -->

			<!-- 方法2 -->
		<div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img v-lazy="item.img" alt="">
      <h1 class="title">{{ item.name }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      	</div>
    	</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			goodslist:Array
		}
	},
	created() {
		this.getGoodsList()
	},
	methods: {
		getGoodsList() {
			this.$axios.get('static/mock/goodslist.json')
				.then(res=>{
				// console.log(res.data.data)
				this.goodslist = res.data.data
				})
				.catch(error=>{
					Toast("获取新闻列表失败");
				})
		},
		goDetail(id) {
			//传递参数
			 this.$router.push({ name: "goodsInfo", params: { id } });
		}
	}
}
</script>
<style lang="less" scoped>
// 大盒子display: flex;
.goods-list {
	 display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: space-between;
		.goods-item {
			width: 48%;
			border: 1px solid #ccc;
			box-shadow: 0 0 8px #ccc;
			margin: 4px 0;
			padding: 2px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 293px;
			img {
     		 width: 100%;
			}
			.title {
      	font-size: 14px;
			}
			.info {
				background-color: #eee;
				p {
					margin: 0;
					padding: 5px;
				}
				.price {
					.now {
						color: red;
						font-weight: bold;
						font-size: 16px;
					}
					.old {
						text-decoration: line-through;
						font-size: 12px;
						margin-left: 10px;
					}
				}
				.sell {
					display: flex;
					justify-content: space-between;
					font-size: 13px;
				}
			}
		}
}
</style>

