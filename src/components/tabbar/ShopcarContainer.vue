<template>
  <div class="shopcar-container">
		  <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<van-switch v-model="checked" />
            <img :src="item.img">
            <div class="info">
              <h1>{{ item.name }}</h1>
              <p class="abo">
                <span class="price">￥{{ item.price }}</span>
                <num-box ></num-box>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#">删除</a>
              </p>
            </div>

					</div>
				</div>
			</div>

			<!-- 结算区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">8</span> 件， 总价 
							<span class="red">￥0</span></p>
            </div>
             <span class="danger">去结算</span>
					</div>
				</div>
			</div>
      <p>{{ $store.getters.getGoodsSelected }}</p>

  </div>
    </div>
	</div>
</template>

<script>
import numBox from '@/base/numbox/numbox'
export default {
	data() {
		return {
			goodslist:Array,
			 checked: true
		}
	},
		created() {
		this.getGoodsList()
	},
	methods: {
		getGoodsList() {
			this.$axios.get('static/mock/shopList.json')
				.then(res=>{
				// console.log(res.data.data)
				this.goodslist = res.data.data
				})
				.catch(error=>{
					Toast("获取新闻列表失败");
				})
		}
	},
	components: {
		numBox
	}
}
</script>


<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
			width: 60px;
			margin-left: 20px;
			height: 81px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
	}
	.mui-card {
		margin: 10px 0;
	}
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
.abo {
	position: relative;
}
a {
	position: absolute;
	right: 20px;
	bottom: 10px;
}
.jiesuan {
	background-color: #fff;
	padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
		}
		p {
			line-height: 25px;
		}
		.danger {
			color:#fff;
			padding: 5px 6px;
			border-radius: 15px;
			background-color: orangered;
		}
  }
</style>