<template>
  <div class="cart">
    <div class="shoppingCart">
      <h2>我的購物車</h2>
      <ul>
        <li>
          <img
            class="gameimg"
            src="https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/D8mYIXWja8knuqYlwqcqVpi1.jpg"
            alt=""
          />
          <div class="name">艾爾登法環</div>
          <div class="number">
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="5"
              label="數量"
            ></el-input-number>
          </div>
          <div class="price">NT$1200元</div>
          <div class="SumPrice">共1200元</div>
          <a href="#" class="delete">刪除</a>
        </li>
      </ul>
      <div class="TotalPrice">總共:1200元</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      num: "0",
    };
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

.cart {
  margin-top: 100px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.shoppingCart {
  margin: 10%;
}
.shoppingCart h2 {
  text-align: center;
  font-size: 40px;
  color: orange;
  margin-bottom: 1rem;
}
.shoppingCart ul li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  padding: 10px 0;
}
.gameimg {
  width: 300px;
  margin-right: 1rem;
}
.name,
.number,
.price,
.delete,
.SumPrice {
  margin-right: 1rem;
  font-size: 24px;
}
.delete {
  text-decoration: none;
  color: blue;
}
.delete:hover {
  color: red;
}
.TotalPrice{
  font-size: 30px;
  margin-top: 1rem;
  text-align: right;
}

</style>
