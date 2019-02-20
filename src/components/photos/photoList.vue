<template>
    <div class="photolist">
      <van-tabs>
				<van-tab v-for="(item,index) in navList" :title="item.name" :key="index">
				</van-tab>
      </van-tabs>

			<ul class="photo-list">
				<router-link tag="li" :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id">
					<img v-lazy="item.img">
					<div class="info">
						<h1 class="info-title">{{ item.content }}</h1>
						<div class="info-body">{{ item.zhaiyao }}</div>
					</div>
				</router-link>
			</ul>
			<loading v-show="!list.length"></loading>
    </div>
</template>

<script>
import loading from '@/base/loading/loading'
export default {
	data() {
		return {
			navList:[{
				id:1,
				name:'全部'
				},{
				id:2,
				name:'家居生活'
				},{
				id:3,
				name:'摄影设计'
				},{
				id:4,
				name:'明星美女'
				},{
				id:5,
				name:'娱乐'
				},{
				id:6,
				name:'推荐'
				}
			],
			list:Array
		}
	},
	created() {
		this.getPhotoList()
	},
	methods: {
		getPhotoList() {
			this.$axios.get('static/mock/photoList.json')
				.then(res=>{
				console.log(res.data.data)
				this.list = res.data.data
				})
				.catch(error=>{
					Toast("获取新闻列表失败！");
				})
		}
		// getAllCategory() {
    //   // 获取所有的图片分类
    //   this.$http.get("api/getimgcategory").then(result => {
    //     if (result.body.status === 0) {
    //       // 手动拼接出一个最完整的 分类列表
    //       result.body.message.unshift({ title: "全部", id: 0 });
    //       this.cates = result.body.message;
    //     }
    //   });
    // },
    // getPhotoListByCateId(cateId) {
    //   // 根据 分类Id，获取图片列表
    //   this.$http.get("api/getimages/" + cateId).then(result => {
    //     if (result.body.status === 0) {
    //       this.list = result.body.message;
    //     }
    //   });
    // }
	},
	components: {
		loading
	}
}
</script>

<style lang="less" scoped>
/deep/.van-tabs__line {
	background-color: #fff!important;
	width: 0!important;
}
/deep/.van-tab--active {
	color:skyblue!important;
}
/dee/.van-tab {
	font-size: 18px;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
			max-height: 84px;
			line-height: 20px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>

