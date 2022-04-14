<template>
  <div class="news">
    <div class="banner">
      <h2>最新消息</h2>
    </div>
    <div class="newscontent">
      <ul class="newstitle">
        <li :key="index" v-for="(item, index) in news">
          <a :href="'#/news/' + item.id" @click="toTop"
            ><img :src="item.images" alt="" />
            <div class="newsLink">
              <h3>{{ item.title }}</h3>
              {{ item.date }}
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NewsList from "@/database/newslist";
export default {
  name: "news",
  mounted() {
    this.news = NewsList;
  },
  data() {
    return {
      news: [],
    };
  },
  methods:{
    toTop(){
      scrollTo(0,0)
    }
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
  background-image: url("https://deepq.com/wp-content/uploads/2018/09/bg7-%E7%9B%B8%E9%97%9C%E6%B6%88%E6%81%AF-%E4%BF%AE%E6%94%B9%E7%89%88.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner h2{
  position: absolute;
  color: white ;
  font-size: 100px;
  background: rgba(104, 104, 104, 0.6);
  padding: 20px 50px;
  z-index: 98;
}
.newscontent {
  max-width: 1400px;
  margin: 50px auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.newstitle {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}
.newstitle li img {
  max-width: 25%;
}
.newstitle a {
  display: flex;
  text-decoration: none;
  font-size: 20px;
  color: black;
  border: 1px solid rgb(233, 225, 225);
  border-radius: 5px;
  margin: 1rem;
  transition: all 0.3s;
  box-shadow: 0.8px 0.9px 3px grey;
}
.newstitle a:hover {
  box-shadow: 1px 8px 20px grey;
}
.newsLink {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
}
</style>
