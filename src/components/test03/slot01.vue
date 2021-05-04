<template>
  <div>slot training 01</div>
  <slot>
    <button>button</button><br />
    <label for="name">name:</label>
    <input id="name" type="text" placeholder="Please input your name" />
  </slot>
</template>

<script>
export default {
  name: "slot01",
  data() {
    return {};
  },
};
</script>

<style>
</style>