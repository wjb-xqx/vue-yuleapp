<template>
    <scroll class="NewsList">
			<div>
        <ul class="listBox">
            <router-link tag="li" :to="'/home/newsinfo/' + item.id" v-for="(item,index) in newsList" :key="index">
                <div class="img">
									<img v-lazy="item.img" alt="">
								</div>
                <div class="rightBox">
                   <h3>{{ item.title }}</h3>
                    <p class='mui-ellipsis'>
                        <span>发表时间：{{ item.time ||dateFormat }}</span>
                        <span>点击：{{item.num}}次</span>
                    </p>
                </div>
            </router-link>
         </ul>
				</div>
    </scroll>
</template>

<script>
import scroll from '@/base/scroll/scroll'
export default {
		name:"NewsList",
		data() {
			return {
				newsList:Array
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.$axios.get('static/mock/newsList.json')
				.then(res=>{
				// console.log(res.data.data)
				this.newsList = res.data.data
				})
				.catch(error=>{
					Toast("获取新闻列表失败！");
				})
			}
		},
		components: {
			scroll
		}
}
</script>

<style lang="less" scoped>
.NewsList {
	position: absolute;
	top: 40px;
	left: 0;
	right: 0;
	bottom: 55px;
	.listBox {
		margin-bottom: 100px;
		>li {
			margin: 5px 10px;
			padding: 8px 0;
			display: flex;
			border-bottom: 1px solid #ccc;
			>.img {
				width: 60px;
				height: 60px;
				border-radius: 10px;
				>img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			>.rightBox {
				display: flex;
				padding-left: 8px;
				 flex-direction: column;
    		justify-content: space-between;
				>h3 {
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					line-height: 20px;
					font-size: 14px;
				}
				>.mui-ellipsis {
					font-size: 12px;
					color: #226aff;
					display: flex;
					justify-content: space-between;
					line-height: 20px;
				}
			}
		}
	}
}
</style>

