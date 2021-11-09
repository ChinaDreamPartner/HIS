<template>
  <el-row class="home" :getter="10" style="margin: 60px 30px">
    <el-col :span="20">
      <el-card shadow="hover">
        <div class="user">
          <img src="@/image/logo.png" />
          <div class="userInfo">
            <p class="name">用户</p>
            <p class="access">{{ na }}</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：
            <spa>2021-7-19</spa>
          </p>
          <p>
            上次登录地点：
            <spa>黑龙江省-哈尔滨</spa>
          </p>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div class="table" style="width: 450px">
    <el-form label-width="50px" style="margin: 0">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" style="width: 450px">
        <el-select
          v-model="form.gender"
          style="width: 400px"
          placeholder="please select gender"
        >
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="form.detail"
        ></el-input>
      </el-form-item>
      <el-button id="button" type="primary" @click="qr()">确认</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { HIS_U } from "@/datasource/Types";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const form = ref<HIS_U>({ name: "user" });
    const na = ref<string>("user");
    const qr = () => {
      const con = confirm("是否确认修改");
      if (con == true) {
        na.value = form.value.name as string;
      }
    };
    return {
      na,
      qr,
      form,
    };
  },
});
</script>
<style scoped>
.home {
  width: 500px;
  height: 500px;
}
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.user img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 40px;
}
.name {
  font-size: 32px;
  margin-bottom: 10px;
}
.access {
  color: #999999;
}
.login-info p {
  line-height: 28px;
  font-size: 14px;
  color: #999999;
}
.login-info span {
  color: #666666;
  margin-right: 60px;
}
.table {
  margin: 70px 0;
}
#button {
  margin: 0 20px;
  width: 100%;
}
</style>
