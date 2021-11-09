<template>
  <div style="background: red">
    <h3>这是登陆界面</h3>

    <input type="text" placeholder="请输入用户名" v-model="username" />

    <input type="password" placeholder="请输入密码" v-model="password" />
    <button v-on:click="login">登录</button>
  </div>
</template>

<style>
.login-wrap {
  text-align: center;
}
h3 {
  text-align: center;
}
span {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
</style>
