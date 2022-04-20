<template>
  <div class="cart">
    <div class="shoppingCart">
      <h2>我的購物車</h2>
      <ul>
        <li v-for="(items, index) in cartProducts" :key="index">
          <img class="gameimg" :src="items.images" alt="" />
          <div class="name">{{ items.name }}</div>
          <div class="price">NT${{ items.price }}元</div>
          <div class="number">{{items.num}}個</div>
          <div class="SumPrice">共{{ items.sum }}元</div>
          <a href="#" class="delete" @click="deleteItems(items)">刪除</a>
        </li>
      </ul>
      <div class="TotalPrice">總共:{{ totalPrice }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "about",
  computed: {
    ...mapState("cart", ["cartProducts"]),
    ...mapGetters("cart", ["totalCount", "totalPrice"]),
  },
  data() {
    return {
      num: "0",
    };
  },
  methods: {
    ...mapMutations("cart", ["deleteItems"]),
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
  text-align: center;
  font-size: 24px;
  width: 100%;

}
.delete {
  text-decoration: none;
  color: blue;
}
.delete:hover {
  color: red;
}
.TotalPrice {
  font-size: 30px;
  margin-top: 1rem;
  text-align: right;
}
</style>
