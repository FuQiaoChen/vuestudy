<template>
    <div>************************</div>
    <div>slot training 02</div>
    <div>
        <slot name="first">{{ msg }}</slot>
        <slot name="middle"></slot>
        <slot name="last"></slot>
    </div>
    <div></div>
    <div></div>
</template>

<script>
export default {
    name: "slot02",
    data() {
        return {
            msg: "我是子组件插槽的默认内容",
        };
    },
};
</script>

<style>
</style>