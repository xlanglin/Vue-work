<template>
  <div id="app">
    <div class="wrap">
      <div class="header">
        <h1>
          <a href="">搜G<span class="title-small">ame</span>站</a>
        </h1>
        <ul class="mainmenu">
          <li class="menu-item link-active">
            <a
              href="#/"
              class="menu-link link-active"
              @click="toTop"
              data-hover="首頁"
              >首頁</a
            >
          </li>
          <li class="menu-item">
            <a
              href="#/news"
              class="menu-link"
              @click="toTop"
              data-hover="最新消息"
              >最新消息</a
            >
          </li>
          <li class="menu-item">
            <a
              href="#/game"
              class="menu-link"
              @click="toTop"
              data-hover="遊戲列表"
              >遊戲列表</a
            >
          </li>
          <li class="menu-item">
            <a
              href="https://github.com/xlanglin"
              class="menu-link"
              @click="toTop"
              data-hover="關於我們"
              target="_blank"
              >關於我們</a
            >
          </li>
          <li class="menu-item">
            <a href="#/cart" class="shoppingCar" @click="toTop"
              ><i class="el-icon-shopping-cart-1"></i
            ><span class="count" v-if="totalCount">{{totalCount}}</span></a>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <div class="detail">
        <h2>
          <a href="">搜G<span class="title-small">ame</span>站</a>
        </h2>
        <div class="detail-menu">
          <ul class="mainmenu">
            <li>
              <a
                href="#/news"
                class="menu-link"
                @click="goTop"
                data-hover="最新消息"
                >最新消息</a
              >
            </li>
            <li>
              <a
                href="#/game"
                class="menu-link"
                @click="goTop"
                data-hover="遊戲列表"
                >遊戲列表</a
              >
            </li>
            <li>
              <a
                href="https://github.com/xlanglin"
                target="_blank"
                class="menu-link"
                @click="goTop"
                data-hover="關於我們"
                >關於我們</a
              >
            </li>
          </ul>
        </div>
        <ul class="detail-link">
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-facebook" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-github" /></a>
          </li>
        </ul>
        <p class="white ta-c">本網頁僅供學習使用 無任何商業用途</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "App",
  data() {
    return {
      Email: "",
    };
  },
  computed :{
    ...mapGetters('cart',['totalCount'])
  },
  methods: {
    toTop(e) {
      scrollTo(0, 0);
      let a = document.querySelectorAll(".menu-item");
      a.forEach(function (e) {
        e.classList.remove("link-active");
      });
      e.path[1].classList.add("link-active");
    },
    goTop(e) {
      scrollTo(0, 0);
      let getName = e.path[0].childNodes[0].data;
      let a = document.querySelectorAll(".menu-item");
      a.forEach(function (e) {
        e.classList.remove("link-active");
        if (getName == e.textContent) {
          e.classList.add("link-active");
        }
      });
    },
    
  },
};
</script>

<style >
/*css reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background: rgb(245, 245, 250);
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
:after,
:before {
  box-sizing: border-box;
}

/*start*/
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrap {
  margin: 0 auto;
  width: 100%;
}

/* header */
.header {
  display: flex;
  justify-content: space-around;
  background-color: #212121;
  padding: 5px 0;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}
.header h1 {
  padding: 1rem 0;
  font-size: 40px;
}
.header h1 a {
  text-decoration: none;
  color: white;
}

.title-small {
  font-size: 25px;
}
.mainmenu {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
}
.mainmenu * {
  box-sizing: border-box;
}
.menu-item {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.5em;
  padding: 0;
}
.mainmenu a {
  padding: 0.5em 0;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
}
.mainmenu a:before,
.mainmenu a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.mainmenu a:before {
  bottom: 0;
  display: block;
  height: 3px;
  width: 0%;
  content: "";
  background-color: #2980b9;
}
.mainmenu a:after {
  left: 0;
  top: 0;
  padding: 0.5em 0;
  position: absolute;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
  max-width: 0%;
  overflow: hidden;
}
.mainmenu a:hover:before,
.mainmenu .link-active a:before {
  opacity: 1;
  width: 100%;
}
.mainmenu a:hover:after,
.mainmenu .link-active a:after {
  max-width: 100%;
}

.shoppingCar {
  padding: 1rem;
  font-size: 30px;
  position: relative;
}
.shoppingCar:hover {
  color: white;
}
.count{
  position: absolute;
  top: 10px;
  right: -5px;
  font-size: 14px;
  background: red;
  color: white;
  border-radius: 100%;
  padding: 3px;
}
.footer {
  margin-top: 5px;
  background: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 4rem;
}
.detail h2 {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  margin-top: 1rem;
}
.footer h2::before {
  position: absolute;
  content: "";
  width: 500px;
  height: 1px;
  top: 50%;
  background-color: #dbd0be;
  right: 100%;
  transform: translateY(-50%);
}
.footer h2::after {
  position: absolute;
  content: "";
  width: 500px;
  height: 1px;
  background-color: #dbd0be;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}
.footer h2 a {
  font-size: 40px;
  color: white;
  text-decoration: none;
}
.white {
  color: white;
}
.big {
  font-size: 25px;
}
.center {
  text-align: center;
}
.email-detail {
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 400px;
}
.detail-link {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.detail-link a {
  font-size: 30px;
  color: white;
}
.detail-link a:hover {
  color: red;
}
.detail-menu {
  margin-bottom: 16px;
}
.detail-menu .mainmenu li {
  padding: 5px;
}
.el-input__inner,
.el-button {
  border-radius: 0%;
}
.ta-c {
  text-align: center;
}
</style>
