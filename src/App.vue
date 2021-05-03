<template>
  <div id="nav">
    <!-- 用tag属性把<router-link>类似的<a>标签改为buttom好像不好使，只好用代码的方式实现了，晕。。。 -->
    <!-- <router-link to="/test01" tag="li">练习-1</router-link> ||  
    <router-link to="/test02" tag="button">练习-2</router-link> -->
    <button class="btn" @click="btna">组合练习-1</button>
    <button class="btn" @click="btnb">组合练习-2</button>
  </div>
  <!-- <router-view />是必须有的 本质上就是占位    -->
  <router-view />
</template>

<script>
export default {
  methods: {
    //通过监听绑定方法来达到页面跳转，替代<router-link>标签
    btna() {
      this.$router.push("/test01"); //router的内置方式，类似于history.pushstate() 也可用replace等
    },
    btnb() {
      this.$router.push("/test02");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;
  a {
    font-weight: bold;
    color: #2c3e50;

    // &.router-link-exact-active {
    //   text-decoration: none;
    //   display: inline-block;
    //   color: #42b983;
    // }
  }
  // .router-link-exact-active:hover {    //router内置激活时的class，可用于设置css
  //   color: #ff0000;
  // }
.btn:hover{
  color: #ff0000;
}

}
</style>
