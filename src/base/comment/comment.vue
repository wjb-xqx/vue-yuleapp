<template>
    <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <button @click="postComment">发表评论</button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.name }}&nbsp;&nbsp;发表时间：{{ item.time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>
    </div>
    <div class="more" plain @click="getMore">
        加载更多...
    </div>
  </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            msg:'',
            comments:[{
                id:1,
                name:'哔哩哔哩',
                content:"d大象和蚂蚁",
                time:"2018/2/19"
                },
                {
                id:2,
                name:'哔哩哔哩',
                content:"d大象和蚂蚁",
                time:"2018/2/19"
                },{
                id:3,
                name:'哔哩哔哩',
                content:"d大象和蚂蚁",
                time:"2018/2/19"
                },{
                id:4,
                name:'哔哩哔哩',
                content:"非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好，写的",
                time:"2018/2/19"
                }
            ]
        }
    },
    created() {

    },
    methods : {
        postComment() {
          // 校验是否为空内容
        if (this.msg.trim().length === 0) {
          return this.$toast("评论内容不能为空！");
        }
        let arr = {name:'爱你的'}
        let a = this.msg
        arr.content = a
        this.comments.unshift(arr)
            
        },
        getMore() {

        }
    }
}
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
    width: 98%;
  }

  .cmt-list {
    margin: 10px 0;
    .cmt-item {
      font-size: 13px;
      margin-bottom: 10px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 20px;
        text-indent: 2em;
      }
    }
  }

  .more {
      width: 100%;
      color: orangered;
      border: 1px solid orange;
      text-align: center;
      line-height: 40px;
      margin-bottom: 10px;
  }
}
</style>

