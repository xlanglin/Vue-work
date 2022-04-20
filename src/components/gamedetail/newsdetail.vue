<template>
  <div class="newsdetail">
    <div class="banner">
      <h2>新聞資訊</h2>
    </div>
    <div class="newsDetail" v-if="detail">
      <h2>{{detail.name}}</h2>
      <div class="newsdate">{{detail.date}}</div>
      <div class="newsimg">
        <el-image
          style="max-width: 100%; height: 500px"
          :src="detail.images"
          :fit="fit"
        ></el-image>
      </div>
      <p class="newsContent">
        {{detail.intro}}
      </p>
      <p class="newsContent">
        {{detail.intro2}}
      </p>
    </div>
  </div>
</template>

<script>
import news1 from '@/database/news1'
import news2 from '@/database/news2'
import news3 from '@/database/news3'
import news4 from '@/database/news4'
const newMaps ={
  1: news1,
  2: news2,
  3: news3,
  4: news4,
}
export default {
  name: "newsdetail",
  mounted() {
    this.id = this.$router.history.current.params.id;
    this.detail = newMaps[this.id]
  },
  data() {
    return {
      detail: undefined,
      id: "",
    };
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.banner {
  margin-top: 50px;
  height: 400px;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-game-background-banner-image_148885.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner h2 {
  position: absolute;
  color: white;
  font-size: 100px;
  background: rgba(104, 104, 104, 0.6);
  padding: 20px 50px;
  z-index: 98;
}

.newsDetail {
  max-width: 1400px;
  margin: 50px auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.newsDetail h2 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
.newsdate {
  text-align: center;
  margin-top: 15px;
  margin-left: 30px;
  font-size: 20px;
}
.newsimg {
  margin-top: 10px;
  text-align: center;
}
.newsContent {
  text-indent: 40px;
  margin-top: 1rem;
  font-size: 20px;
  line-height: 1.5;
}
</style>
