<template>
    <div>路由页面的数据传递</div>

    <!-- <div>{{$route.query.name}}</div>
  <div>{{$route.query.gender}}</div>
  <div>{{$route.query.age}}</div> -->
    <div>
        <!-- //注意是route而不是router，两者有本质的区别：router是vue原型（类、构造函数），而route是router的实例，即跳转路径 -->
        <button @click="btn">按钮</button>
        <li v-for:="(item,index) of $route.query">{{ index }}:{{ item }}</li>
    </div>

    <slot01
        ><li>{{ data }}</li></slot01
    >
    <slot01></slot01>
    <slot02>
        <!-- 具名插槽只能放在template标签中，且通过v-slot标识插槽名,而且不能用引号 -->
        <template v-slot:first>
            <p>{{ msg }}这是父组件的内容</p>
        </template>
    </slot02>

    <slot02>
        <!-- v-slot的值设置为default时将只显示子组件插槽的默认内容 -->
        <template #default>
            <p>这是父组件的内容</p>
        </template>
    </slot02>

    <slot02>
        <template #middle>
            <button>按钮</button><br />
            <label for="tt">姓名：</label>
            <input id="tt" type="text" name="name" placeholder="请输入姓名" />
        </template>
    </slot02>

    <slotdata>
        <!-- 所有插槽带来的数据全部放在自定义的aa对象中 
		如果是匿名插槽应用v-slot:default来接收数据,
		即可用#default="{}"来接收slot元素的属性值  -->
        <template v-slot:header="aa">
            {{ aa.user.name }}---{{ aa.user.gender }}?
            <!-- {{ aa.user.name }}---{{ aa.user.gender }}? -->
        </template>
    </slotdata>
    <slotdata>
        <!-- 也可把子组件插槽传来的插槽prop直接定义成对象，这样更简洁   -->
        <!-- 可以把v-slot：缩写成 # -->
        <template #header="{ user }">
            {{ user.name }}---{{ user.gender }}
            <!-- {{ aa.user.name }}---{{ aa.user.gender }}? -->
        </template>
    </slotdata>

    <!-- 以下是只有一个默认插槽且只有一个引用时才可简写的用法 -->
    <!-- <slotdata v-slot="slotProps">
        {{ slotProps.data.gender }}
    </slotdata> -->
</template>

<script>
import slot01 from "../components/test03/slot01";
import slot02 from "../components/test03/slot02";
import slotdata from "../components/test03/slot-data";

export default {
    name: "test03",
    components: {
        slot01,
        slot02,
        slotdata,
    },
    data() {
        return {
            data: "我是谁?????",
            msg: "hehe",
            slotProps: {},
        };
    },
    methods:{
btn(){
    console.log(this.$route);
}

    }
};
</script>

<style scoped>
li {
    list-style: none;
    text-align: left;
    margin-left: 100px;
}
</style>