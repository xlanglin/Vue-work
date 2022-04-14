<template>
  <div class="newsdetail">
    <div class="banner">
      <h2>新聞資訊</h2>
    </div>
    <div class="newsDetail">
      <h2>《艾爾登法環》出貨突破1200萬，日本銷售破100萬</h2>
      <div class="newsdate">2022. 03 . 10</div>
      <div class="newsimg">
        <el-image
          style="max-width: 100%; height: 500px"
          src="https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/D8mYIXWja8knuqYlwqcqVpi1.jpg"
          :fit="fit"
        ></el-image>
      </div>
      <p class="newsContent">
        《艾爾登法環》在上市一週後就創造同時線上人數突破89萬、銷量超過500萬套的驚人紀錄，宮崎英高滿滿的「善意」近期更是佔據遊戲圈所有版面。今日(3月16日)，萬代南夢宮娛樂宣布《艾爾登法環》上市不到一個月於全球銷量就累計突破1200萬套，日本國內銷量也累計超過100萬套，再次創造歷史。
      </p>
      <p class="newsContent">
        今日，官方也公布了遊戲總監宮崎英高的賀詞，「有這麼多人遊玩本作，讓我非常驚喜，在此僅代表製作團隊，向所有玩家致上最高的謝意。希望各位玩家可以在自喬治‧R.R‧馬丁的神話而生的廣大世界裡，享受自由度極高且滿佈威脅的冒險旅程。今後也請大家繼續支持《艾爾登法環》。」
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsdetail",
  mounted() {},
  data() {
    return {
      detail: {},
    };
  },
  methods: {
    getID() {},
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
