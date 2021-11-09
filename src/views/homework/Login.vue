<template>
  <div class="img">
    <div align="center">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input type="text" v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm()">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { LOGIN } from "@/store/VuexTypes";
import { Store, useStore } from "vuex";
import { defineComponent, ref, watch } from "vue";
import { UserLogin } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const user = ref<UserLogin>({});
    const form = { userName: "", password: "" };
    const ruleForm = ref(form);
    const submitForm = () => {
      store.dispatch(LOGIN, ruleForm.value).then((data) => (user.value = data));
    };
    watch(user, () => {
      if (user.value.role == 1) {
        store.state.agree = 1;
        sessionStorage.setItem("agree", "1");
      } else if (user.value.role == 2) {
        console.log(sessionStorage.getItem("agree"));
        sessionStorage.setItem("agree", "2");
        console.log(sessionStorage.getItem("agree"));
        console.log(1);
        store.state.agree = 2;
      } else {
        store.state.agree = 3;
        sessionStorage.setItem("agree", "3");
      }
    });
    return {
      submitForm,
      ruleForm,
    };
  },
});
</script>
<style scoped>
.img {
  background: url("../../image/background.jpg");
  display: flex;
  background-size: cover;
  width: 1525px;
  height: 705px;
  background-attachment: fixed;
}
.demo-ruleForm {
  float: left;
  padding: 40px 90px 0 0;
  margin: 200px 500px;
  background: rgba(238, 234, 234, 0.8);
  border-radius: 3%;
}
</style>

function userRouter() { throw new Error("Function not implemented."); }
