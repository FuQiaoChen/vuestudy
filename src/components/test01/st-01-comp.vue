<template>
  <div class="head">
    <h4>{{ tittle }}</h4>
    <div>{{ param01 }}{{ param02 }}</div>
    <div><em>Has a Message on top,doesn't display?</em></div>
  </div>
</template>

<script>
export default {
  //外部标签名：默认值
  name: "comp01",
  //外部标签属性：定义在别的vue中引用时标签内的属性，并规定数据类型（引用时数据类型不符时不会报错,但有警告）
  props: {
    param01: String, //注意：此处为数据的简写，数据类型开头字母大写
    param02: String,
  },
  //内部属性：必须在data中定义内部属性及方法，否则在组件外部找不到对应的值，此为data:function(){return{属性同单独vue文件的data属性}}的简写
  //组件中的data必须是一个函数且返回一个对象，此对象中保存各种属性和方法相当于是一个嵌套对象，而在非组件中时data是一个对象
  data() {
    return {
      tittle: "我是组件01",
      data: {},
      methods: {},
      components: {},
    };
  },
};
</script>

<style scoped lang="scss">
.head {
  font-size: 15px;
  color: red;
  margin-top: 20px;
  h4 {
    color: rgb(17, 228, 52);
  }
}
</style>