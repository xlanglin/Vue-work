<template>
  <div class="index">
    <div class="banner">
      <el-carousel trigger="click" height="500px" :interval="5000">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <el-image
            :src="item"
            style="width: 100%; height: 100%"
            fit="fill"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="slogan">
      <ul class="sloganDetail">
        <li class="slogan1 animated">
          <img
            src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/09/06/1/13738776.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050"
            alt=""
          />
          <div class="slogan1Word">
            <h2 class="titlered">遊戲會將您帶往何處?</h2>
            <h3>PS5</h3>
            <ul>
              <li>■ 速度疾如閃電</li>
              <li>■ 備有客製化</li>
              <li>■ 精彩絕倫的遊戲</li>
              <li>■ 驚嘆於難以置信的視覺效果，同時體驗 PS5 的新功能</li>
              <li>■令人驚嘆的身歷其境</li>
            </ul>
          </div>
        </li>

        <li class="slogan2 animated">
          <img
            src="https://cdn.vox-cdn.com/thumbor/6QTbhbmlSyMwl5E8y1aU4x3cTz8=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65003327/jbareham_1492_170228_0024.0.0.jpg"
            alt=""
          />
          <div class="slogan2Word">
            <h2 class="titlered">隨時隨地，大家同樂</h2>
            <h3>NSwitch</h3>
            <ul>
              <li>■SWITCH & PLAY 遊戲生活變得更加互動</li>
              <li>■改變形態多種遊戲模式：TV模式、桌上模式、手提模式</li>
              <li>■最多連線8台主機，進行對戰或協力遊戲</li>
              <li>■Joy-Con內置「HD震動」體驗逼真細膩臨場感</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <h2 class="newtitle animated">
      <a href="#/news">最新消息<i class="el-icon-arrow-right"></i></a>
    </h2>
    <ul class="latestNews animated">
      <li :key="index" v-for="(item, index) in news">
        <a :href="item.link">
          <img :src="item.images" alt="" />
          <div class="NewsTitle">{{ item.title }}</div>
          <div class="NewsDate">{{ item.date }}</div>
        </a>
      </li>
    </ul>
    <div class="latestItem animated">
      <h2 class="newtitle">
        <a href="#/game">最新遊戲<i class="el-icon-arrow-right"></i></a>
      </h2>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(item, index) in games.slice(0,3)" :key="index">
          <el-image
            :src="item.images"
            style="width: 100%; height: 100%"
            fit="fill"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import NewsList from "@/database/newslist";
import GameList from "@/database/gamelist";
export default {
  name: "index",
  mounted() {
    this.news = NewsList;
    this.games = GameList;
    /*滑鼠滾動 */
    window.addEventListener("scroll", this.fadeAnimate);
    window.addEventListener("scroll", this.testfade);
  },
  data() {
    return {
      news: [],
      games: [],
      items: [
        "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/D8mYIXWja8knuqYlwqcqVpi1.jpg",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
        "https://cdn1.dotesports.com/wp-content/uploads/2022/03/03193046/kirbycik.jpg",
        "https://cdn.thetealmango.com/wp-content/uploads/2022/02/GoW-Ragnarok.jpg",
        "https://i.ytimg.com/vi/5n6rVoeqFaM/maxresdefault.jpg",
      ],
    };
  },

  methods: {
    getHeight(elem) {
      let top = 0;
      while (elem) {
        top = top + parseInt(elem.offsetTop);
        elem = elem.offsetParent;
      }
      return top;
    },
    fadeAnimate() {
      let Item = document.querySelectorAll(".animated");
      for (let i = 0; i < Item.length; i++) {
        if (
          window.pageYOffset + window.innerHeight / 2 >
          this.getHeight(Item[i])
        ) {
          Item[i].classList.remove("animated");
          Item[i].classList.add("fadein");
        }
      }
    },
  },
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
img {
  max-width: 100%;
  height: auto;
}
.index {
  max-width: 1400px;
  margin: 100px auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.banner {
  margin-bottom: 100px;
}
.sloganDetail > li {
  display: flex;
  justify-content: space-between;
}
.slogan1 img {
  width: 50%;
  height: 450px;
}
.slogan1Word,
.slogan2Word {
  width: 45%;
  margin-top: 5rem;
}
.slogan1Word h3 {
  font-size: 40px;
  text-align: center;
}
.slogan1Word li {
  display: flex;
  font-size: 20px;
  margin-top: 1rem;
}
.slogan2 img {
  width: 50%;
  height: 450px;
  order: 3;
}
.slogan2Word h3 {
  font-size: 40px;
  text-align: center;
  order: 1;
}
.slogan2Word li {
  display: flex;
  font-size: 20px;
  margin-top: 1rem;
  order: 2;
}
.titlered {
  color: red;
  font-size: 40px;
  text-align: center;
  margin: 2rem 0;
}
.latestNews {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 16px;
}
.latestNews li {
  width: 23%;
  border-radius: 5%;
  background: white;
  transition: all 0.5s;
  padding-bottom: 2rem;
  position: relative;
  transition: all 0.3s;
  box-shadow: 0.8px 0.9px 3px grey;
}
.latestNews li a {
  text-decoration: none;
  color: black;
}
.latestNews img {
  border-radius: 5% 5% 0 0;
}
.latestNews li:hover {
  box-shadow: 1px 8px 20px grey;
}
.newtitle {
  font-size: 40px;
  text-align: left;
  margin-top: 3rem;
}
.newtitle a {
  display: block;
  text-decoration: none;
  color: #475669;
  margin-bottom: 3rem;
}
.newtitle a:hover {
  color: red;
}
.NewsTitle {
  padding: 12px;
  line-height: 1.5;
}
.NewsDate {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
.el-carousel {
  width: 80%;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.animated {
  opacity: 0;
  transform: translateY(50px);
}
.animated-left {
  opacity: 0;
  transform: translateX(-50px);
}
.animated-right {
  opacity: 0;
  transform: translateX(50px);
}
.fadein {
  opacity: 1;
  transition: all 1s;
  transform: translateY(0);
}
</style>
