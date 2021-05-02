<template>
  <div class="head">我是组件4</div>
  <div>
    <form action="#">
      <div>
        <label for="name">姓名：</label>
        <input
          type="text"
          name="name"
          placeholder="请输入姓名"
          id="name"
          required
          v-model="name"
        />
        <div class="notice">你的姓名是：{{ name }}</div>
      </div>
      <div>
        <span>性别：</span>
        <label for="male"></label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          v-model="gender"
        />男
        <label for="female"></label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          v-model="gender"
        />女
        <div class="notice">你的性别是：{{ gender }}</div>
      </div>
      <div>
        <label for="email">邮箱地址：</label>
        <input
          type="email"
          name="email"
          placeholder="请输入邮箱地址"
          id="email"
        />
      </div>
      <div>
        <label for="phone">电话号码：</label>
        <input
          type="number"
          name="phonenumber"
          placeholder="请输入电话号码"
          id="phone"
          required
        />
      </div>
      <div>
        <label for="password">密码：</label>
        <input
          type="password"
          name="password"
          placeholder="请输入密码"
          id="password"
          v-model="password"
        />
        <div class="notice">你的密码是：{{ password }}</div>
      </div>
      <div>
        <input type="submit" value="submit" @click="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "",
      gender: "male",
      password: "",
    };
  },
  methods: {
    btn() {
      console.log(event);
    },
  },
};
</script>

<style scoped lang="scss">
.head {
  font-size: 15px;
  color: rgb(255, 0, 200);
  padding: 20px;
}
form {
  display: flex;
  width: 300rpx;
  height: 300rpx;
  // background-color: rgb(182, 88, 88);
  margin-left: 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .notice {
    font-size: 10px;
    color: rgb(127, 98, 151);
    // padding-left: 40px;
  }
}
</style>