<template>
  <div class="head">
    <h4>{{ tittle }}</h4>
    <div>{{ param01 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ param02 }}</div>
    <div id="list">
      <!-- v-for需加冒号：否则会报警告，但不影响力使用-->
      <li class="li" v-for:="(a,i) in param03">{{ i }}:{{ a }}</li>
    </div>
  </div>
</template>

<script>
//父传子
export default {
  name: "comp02",
  props: {
    //外部传入数据声明
    param01: {
      type: String, //验证数据类型：string Number boolean Array Objecr Date Function Symbol
      default: "请给数据", //默认值
    },
    param02: {
      type: String,
      default: "还不给？",
    },
    param03: {
      type: Object,
      default: "还不给？",
    },
  },
  data() {
    return {
      tittle: "我是组件02",
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
    color: blue;
  }
}
#list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  .li {
    padding-left: 100px;
    list-style-type: none;
    color: purple;
  }
}
</style>