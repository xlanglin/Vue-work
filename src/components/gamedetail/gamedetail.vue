<template>
  <div class="gamedetail">
    <div class="banner">
      <h2>詳細資訊</h2>
    </div>
    <div class="detailContent" v-if="game">
      <el-image
        :src="game.images"
        fit="fill"
        class="gameimg"
      ></el-image>
      <div class="gameintro" >
        <h3 class="detailName mg-t">{{game.name}}</h3>
        <div class="detailType mg-t">《遊戲類型》：{{game.type}}</div>
        <div class="detailPlay mg-t">《主機平台》：{{game.play}}</div>
        <div class="detailNumber mg-t">《遊戲人數》：{{game.number}}</div>
        <div class="detailDate mg-t">《上市日期》：{{game.date}}</div>
        <div class="detailMake mg-t">《製作廠商》：{{game.Make}}</div>
        <div class="detailPrice mg-t">《遊戲價格》：{{game.price}}</div>
        <div class="detailBuy" @click.prevent="addToCart(game)"><a href="">加入購物車</a></div>
      </div>
    </div>
    <div class="Intro" >
      <h3>《遊戲介紹》</h3>
      <p>{{game.intro}}</p>
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
import {mapMutations } from 'vuex' 
const gameMaps = {
  1: game1,
  2: game2,
  3: game3,
  4: game4,
  5: game5,
  6: game6,
  7: game7,
}

export default {
  name: "gamedetail",
  mounted() {
    this.id = this.$router.history.current.params.id;
    this.game = gameMaps[this.id]
  },
  data() {
    return {
      game: undefined,
      id: "",

    };
  },
  methods:{
      getProduct(id){
        this.game = "game"+id
      },
      ...mapMutations('cart',['addToCart'])
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
