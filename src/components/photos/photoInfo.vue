<template>
  <div class="newsinfo-container">
		<div>
			<h3 class="title">{{ newsinfo.title }}</h3>
			<p class="subtitle">
				<span class="t">发表时间：{{ newsinfo.time | dateFormat }}</span>
				<span>点击：{{ newsinfo.num }}次</span>
			</p>
			<hr>
			<div class="imgs">
				<!-- <img v-for="(item,index) in images" :src="item.img" alt=""
				 class="yulan" :key="index"> -->
				 <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
			</div>
			<div class="content" v-html="newsinfo.content"></div>
			<div class="content" v-html="newsinfo.content1"></div>
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
			id: this.$route.params.id,
			slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 600,
            h: 400
          }
			]
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
				console.log(res.data.data.img1)
				})
				.catch(error=>{
					Toast("获取新闻列表失败");
				})
		},
		handleClose () {
        console.log('close event')
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
			img {
				width: 120px!important;
				float: left;
			}
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
		justify-content: space-between;
		>span:nth-child(1) {
			color: #000;
		}
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
