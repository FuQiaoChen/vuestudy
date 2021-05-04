<template>
    <div>************************</div>
    <div>slot training 03</div>
    <div>
        <!-- 把data对象的数据当做一个user属性(名称自定义）传给父组件，
        绑定在 <slot> 元素上的属性被称为插槽 prop， -->
        <slot name="header" :user="data">{{ user.name }}</slot>
    </div>
    <div></div>
    <div></div>
</template>

<script>
export default {
    name: "slot02",
    data() {
        return {
            data: { name: "joey", gender: "male", age: 18 },
        };
    },
};
</script>

<style>
</style>