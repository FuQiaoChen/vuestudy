<template>
  <div>路由页面的数据传递</div>

  <!-- <div>{{$route.query.name}}</div>
  <div>{{$route.query.gender}}</div>
  <div>{{$route.query.age}}</div> -->
  <div>
    <!-- //注意是route而不是router，两者有本质的区别：router是vue原型（类、构造函数），而route是router的实例，即跳转路径 -->
    <li v-for:="(item,index) of $route.query">{{ index }}:{{ item }}</li>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: none;
  text-align: left;
  margin-left: 100px;
}
</style>