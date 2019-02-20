<template>
	<p class="num1">
		购买数量：
		<button @click="jian">-</button>
		<input type="text" :value="value" @change="countChanged"
		onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" ref="numbox">
		<button @click="add">+</button>
	</p>
</template>

<script>
export default {
	name:"numbox",
	data() {
		return {
			value:1
		}
	},
	 methods: {
    countChanged() {
      // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
      // console.log(this.$refs.numbox.value);
			this.$emit("getcount", parseInt(this.$refs.numbox.value));
			this.value =this.$refs.numbox.value
		},
		jian() {
			this.value--
			if(this.value<1) {
				return this.value =1
			}
		},
		add(){
			this.value++
		}
  },
}
</script>

<style lang="less" scoped>
	.num1 {
		// width: 100%;
		// height: 50px;
		// font-size: 14px;
		// margin-bottom: 10px;
		>input {
			width: 10%;
			text-align: center;
			border: 1px solid #000;
		}
	}
</style>
