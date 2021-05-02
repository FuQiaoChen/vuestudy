<template>
  <div class="head">我是组件3</div>
  <div>
    <!-- v-for需加冒号：否则会报警告，但不影响力使用 -->
    <!-- 子传父绑定click事件，且传递事件参数  -->
    <button v-for:="item in categorise" @click="btnclick(item)">
      {{ item.name }}
    </button>
  </div>
</template>

<script>
//子传父
export default {
  data() {
    return {
      categorise: [
        { id: "01", name: "生活" },
        { id: "02", name: "装饰" },
        { id: "03", name: "电子" },
        { id: "04", name: "摄影" },
        { id: "05", name: "我的" },
      ],
    };
  },
  methods: {
    btnclick(item) {
      //子传父通过发射事件的方式传递数据
      this.$emit("btnclick", item); //需用emits再声明一下，否则会显示警告，但工作正常
    },
  },
  emits: ["btnclick", "btn-click"], //太奇葩了，花了我太多的时间，把命名分开写两遍就不报警了，晕ing。。。
};
</script>

<style scoped lang="scss">
.head {
  font-size: 15px;
  color: rgb(255, 0, 200);
  padding: 20px;
}
</style>