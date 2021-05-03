<template>
 
    <!--注意： to中要写上全路径 -->
    <router-link to="/test02/compreh">综合</router-link>||
    <router-link to="/test02/message">消息</router-link>
    <router-view />

 <!-- 保活，用于缓存数据，提高性能 -->
 <!-- <router-view v-slot="{ message }">
  <keep-alive>
    <component :is="message" />
  </keep-alive>
</router-view> -->

</template>

<script>
export default {};
</script>

<style>
</style>