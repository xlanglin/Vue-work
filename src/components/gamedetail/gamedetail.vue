<template>
  <div class="gamedetail">
    <div class="banner">
      <h2>詳細資訊</h2>
    </div>
    <div class="detailContent" >
      <el-image
        src="https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/D8mYIXWja8knuqYlwqcqVpi1.jpg"
        fit="fill"
        class="gameimg"
      ></el-image>
      <div class="gameintro">
        <h3 class="detailName mg-t">艾爾登法環</h3>
        <div class="detailType mg-t">《遊戲類型》：動作遊戲</div>
        <div class="detailPlay mg-t">《主機平台》：PS5/PC</div>
        <div class="detailNumber mg-t">《遊戲人數》：1人</div>
        <div class="detailDate mg-t">《上市日期》：2022年2月25日</div>
        <div class="detailMake mg-t">《製作廠商》：FromSoftware</div>
        <div class="detailPrice mg-t">《遊戲價格》：NT$ 1290</div>
        <div class="detailBuy"><a href="">加入購物車</a></div>
      </div>
    </div>
    <div class="Intro">
      <h3>《遊戲介紹》</h3>
      <p>
        《艾爾登法環》是由打造出《黑暗靈魂》系列的宮崎英高和《冰與火之歌》作者
        George R.R.
        Martin，兩人合力創造充滿奇幻故事和傳說的嶄新世界。玩家將踏上精心打造的旅程，在充滿鮮血和欺瞞的世界中，會遇到因各種動機而幫助或阻礙玩家的登場人物、背景深不可測的敵人和令人畏懼的野獸，並在冒險過程中揭開這片被詛咒之地的秘密和神話，進而決定這片土地的命運。
      </p>
    </div>
  </div>
</template>

<script>
import game1 from "@/database/game1"
import game2 from "@/database/game2" 
import game3 from "@/database/game3" 
import game4 from "@/database/game4" 
import game5 from "@/database/game5" 
import game6 from "@/database/game6" 
import game7 from "@/database/game7" 
export default {
  name: "gamedetail",
  mounted() {
    const id = this.$router.history.current.params.id;
  },
  data() {
    return {
      detail: {},

    };
  },
  methods:{
      
  }
};
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

.detailContent {
  max-width: 1400px;
  margin: 50px auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  display: flex;
}
.gameimg {
  width: 60%;
}
.gameintro {
  margin-left: 5%;
  width: 30%;
  font-size: 25px;
}
.detailName {
  text-align: center;
  font-size: 40px;
  margin-bottom: 3rem;
}
.mg-t{
  margin-top: 1rem;
}
.detailBuy{
  text-align: center;
  margin-top: 3rem;
}
.detailBuy a{
  text-decoration: none;
  color: white;
  background: #409eff;
  display: block;
  padding: 15px;
}
.detailBuy a:hover{
  background: red;
}
.Intro {
  max-width: 1400px;
  margin: 50px auto;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.Intro h3 {
  color: rgb(255, 7, 7);
  font-size: 40px;
  padding: 1rem;
}
.Intro p {
  margin-top: 1rem;
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 20px;
  line-height: 1.5;
}

</style>
