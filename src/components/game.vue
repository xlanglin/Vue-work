<template >
  <div class="Game">
    <div class="banner">
      <h2>遊戲列表</h2>
    </div>
    <div class="GameContent">
      <div class="gameSelect">
        <ul>
          <li>
            <a href="" @click.prevent="ChangePage"
              ><i class="el-icon-search"></i>所有分類</a
            >
          </li>
          <li>
            <a href="" @click.prevent="ChangePage"
              ><i class="el-icon-baseball"></i>動作遊戲</a
            >
          </li>
          <li>
            <a href="" @click.prevent="ChangePage"
              ><i class="el-icon-magic-stick"></i>益智遊戲</a
            >
          </li>
          <li>
            <a href="" @click.prevent="ChangePage"
              ><i class="el-icon-user-solid"></i>角色扮演</a
            >
          </li>
        </ul>
      </div>
      <div class="gameMenu">
        <ul>
          <li
            v-for="(item, index) in game.slice(
              PageStart,
              PageStart + pagesize
            )"
            :key="index"
          >
            <a :href="'#/game/' + item.id" class="gameDetail" @click="toTop">
              <el-image
                :src="item.images"
                style="width: 100%; height: 100%"
                fit="fill"
              ></el-image>
              <div class="gameName p-d">
                <h3>{{ item.name }}</h3>
                <span class="gameType p-d">{{ item.type }}</span>
              </div>
              <div class="gameSlogan p-d">{{ item.slogan }}</div>
              <div class="gamePrice p-d">NT${{ item.price }}</div>
              <div class="gameLink p-d"></div>
            </a>
              <el-link
                type="primary"
                :underline="false"
                class="gameShopping"
                icon="el-icon-shopping-cart-2"
                @click="addToCart(item)"
                >加入購物車
              </el-link>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :page-size="6"
      :total="7"
      class="pagescroll"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import gameList from "@/database/gamelist";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "game",

  mounted() {
    this.game = this.allProduct;
  },
  data() {
    return {
      game: [],
      pagesize: 6,
      currentpage: 1,
      sliced: [],
      pagelen: 0,
      type: "所有分類",
    };
  },
  computed: {
    PageStart() {
      return (this.currentpage - 1) * this.pagesize;
    },
    TotalPage() {
      return Math.ceil(this.game.length / this.pagesize);
    },
    ...mapState("product", ["allProduct"]),
  },
  methods: {
    ...mapActions("product", ["GetProducts"]),
    ...mapMutations("cart", ["addToCart"]),
    setPage(idx) {
      if (idx <= 0 || idx > this.TotalPage) {
        return;
      }
      this.currentpage = idx;
    },
    toTop() {
      scrollTo(0, 0);
    },
    ChangePage(item) {
      this.game = gameList;
      const type = item.path[0].innerText;
      const vm = this;
      const change = vm.game.filter(function (item) {
        return item.type == type;
      });
      if (type !== "所有分類") {
        vm.game = change;
      } else {
        vm.game = gameList;
      }
    },
  },
  created() {
    this.GetProducts();
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
  background-image: url("https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/07/PlayStation-scaled.jpg?fit=1200%2C675&ssl=1");
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

.GameContent {
  max-width: 2000px;
  margin: 50px auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 1%;
}
.gameSelect {
  margin-top: 1rem;
  width: 15%;
}
.gameSelect ul {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
}
.gameSelect li {
  border: 1px solid rgb(145, 141, 141);
  text-align: center;
  border-radius: 5px;
  margin-top: 3px;
}
.gameSelect ul li a {
  font-size: 20px;
  display: block;
  text-decoration: none;
  color: rgb(145, 141, 141);
  padding: 10px;
}
.gameSelect ul li a:hover {
  background: rgb(233, 230, 230);
}
.gameMenu {
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
}
.gameMenu li {
  max-width: 30%;
  margin-top: 1rem;
  border: 1px solid rgb(175, 174, 174);
  border-radius: 5px;
  position: relative;
  text-align: center;
  box-shadow: 0.8px 0.9px 3px grey;
  transition: all 0.3s;
}
.gameMenu li:hover {
  transform: translateY(-5px);
  box-shadow: 1px 8px 20px grey;
}

.gameName h3 {
  font-size: 25px;
}
.gameType {
  font-size: 16px;
  color: white;
  background: rgb(206, 5, 247);
  margin-bottom: 5px;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 5;
}
.gamePrice {
  font-size: 20px;
}
.p-d {
  padding: 5px;
}
.gameSlogan {
  color: rgb(139, 138, 138);
}
.gameLink {
  display: flex;
  justify-content: space-around;
}
.gameDetail {
  text-decoration: none;
  color: black;
}

.gameShopping {
  font-size: 16px;
  color: white;
  background: #409eff;
  padding: 5px;
  margin-bottom: 5px;
}
.gameShopping:hover {
  color: white;
  background: #0d82f8;
}
.pagescroll {
  text-align: center;
  margin-bottom: 1rem;
}
.el-link.el-link--primary{
  color: white;
}
</style>
