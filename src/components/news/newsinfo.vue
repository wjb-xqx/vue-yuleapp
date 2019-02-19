<template>
  <div class="newsinfo-container">
			<div>
				<h3 class="title">{{ newsinfo.title }}</h3>
				<p class="subtitle">
					<span>发表时间：{{ newsinfo.time | dateFormat }}</span>
					<span>点击：{{ newsinfo.num }}次</span>
				</p>
				<hr>
				<div class="content" v-html="newsinfo.content"></div>
				<img :src="newsinfo.img" alt="" width="100%" height="200px">
				<div class="content" v-html="newsinfo.content1"></div>
				<div class="content" v-html="newsinfo.content2"></div>
				<comment-box :id="this.id"></comment-box>
			</div>
  </div>
</template>

<script>
import commentBox from "@/base/comment/comment";

export default {
	data() {
		return {
			newsinfo:Array,
			id: this.$route.params.id
		}
	},
	created() {
		this.getNewsInfo()
	},
	methods: {
		getNewsInfo() {
			this.$axios.get('static/mock/newsInfo.json?id=id')
				.then(res=>{
				// console.log(res.data.data)
				this.newsinfo = res.data.data
				})
				.catch(error=>{
					Toast("获取新闻列表失败");
				})
		}
	},
	components: {
		commentBox
	}
}
</script>

<style lang="less" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
		line-height: 20px;
		margin-bottom: 15px;
    img {
      width: 100%;
    }
  }
}
</style>
