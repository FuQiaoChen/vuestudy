<template>
  <div>
    <div>{{ wellcome }}</div>
    <!--  应用组件01(即创建组件实例) 直接传入数据，自定义标签都是自结束的，只能添加属性值，不能再放入文本-->
    <comp01 param01="I am comming" param02="!!!" />
    <!-- 应用组件02：将参数绑定在父组件中 不用在标签中直接输入参数 其实质是向子组件中传入数据-->
    <comp02 :param01="cparam01" :param02="cparam02" :param03="cparam03" />
    <!-- 应用组件03：-->
    <comp03 v-on:btnclick="cbtnclick"></comp03>
  </div>
</template>

<script>
import comp01 from "./components/test01/st-01-comp.vue"; //导入局部组件文件 父传子案例
import comp02 from "./components/test01/st-02-exchange.vue"; //父传子案例
import comp03 from "./components/test01/st-03-exchange-child2parent.vue"; //子传父案例

export default {
  name: "App",
  components: {
    //组件注册
    comp01,
    comp02,
    comp03,
  },
  data: function () {
    return {
      //准备子组件中的数据
      wellcome: "Wellcome home",
      cparam01: "comming",
      cparam02: "下面是列表数据",
      cparam03: {
        //子组件中的数据类型：string Number boolean Array Objecr Date Function Symbol均可
        name: "zhang san",
        gender: "male",
        age: 19,
      },
    };
  },
  methods: {
    cbtnclick(citem) {
      console.log(citem);
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
  margin-top: 20px;
}
</style>
