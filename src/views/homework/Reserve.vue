<template>
  <div style="width: 850px; margin: 50px 0">
    <div>
      <el-steps :active="number" align-center>
        <el-step title="步骤1" description="登录"></el-step>
        <el-step title="步骤2" description="点击预约"></el-step>
        <el-step title="步骤3" description="选择时间"></el-step>
        <el-step title="步骤4" description="选择医生"></el-step>
        <el-step title="步骤5" description="确认"></el-step>
      </el-steps>
    </div>
    <div>
      <div class="classroom" style="margin: 100px 50px; height: 300px">
        <div class="pb" style="margin: 0 20px 0 0">
          选择星期：
          <el-select
            v-model="num"
            filterable
            placeholder="请选择"
            style="padding: 0 20px 0 0"
          >
            <el-option
              v-for="(l, index) in 7"
              :key="index"
              :label="`星期${l}`"
              :value="`0${l}`"
            >
              星期{{ l }}
            </el-option>
          </el-select>
          选择时间：
          <el-select
            v-model="time"
            filterable
            placeholder="请选择"
            style="margin: 0 20px 0 0"
          >
            <el-option
              v-for="(l, index) in 3"
              :key="index"
              :label="`第${l}班`"
              :value="`0${l}`"
            >
              第{{ l }}班
            </el-option>
          </el-select>
          <el-button class="button" @click="qr()">确认</el-button>
        </div>
        <div v-if="vis" style="margin: 30px 0">
          <div class="container">
            <el-table
              :data="
                tableData.filter(
                  (data) =>
                    !search ||
                    data.name.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 800px"
            >
              style="width: 100%">
              <el-table-column label="姓名" prop="name" />
              <el-table-column label="性别" prop="gender" />
              <el-table-column label="年龄" prop="age" />
              <el-table-column label="所属科室" prop="technical" />
              <el-table-column align="right">
                <template #header>
                  <el-input v-model="search" placeholder="Type to search" />
                </template>
                <el-table-column>
                  <el-button @click="query">选择</el-button>
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const agree = store.state.agree;
    const search = ref<string>();
    const num = ref<string>();
    const time = ref<string>();
    const vis = ref(false);
    const number = ref(2);
    const qr = () => {
      vis.value = true;
      number.value = number.value + 1;
    };
    const query = () => {
      number.value = number.value + 1;
      const con = confirm("是否选择该医生");
      if (con == true) {
        ElMessage.success("预约成功");
        number.value = number.value + 1;
      } else {
        ElMessage.error("已取消");
        number.value = number.value - 1;
      }
    };
    const tableData = [
      {
        name: "wb",
        gender: "男",
        age: 35,
        technical: "外科",
      },
      {
        name: "王琦",
        gender: "女",
        age: 35,
        technical: "外科",
      },
      {
        name: "李秋",
        gender: "女",
        age: 38,
        technical: "儿科",
      },
    ];
    return {
      query,
      number,
      qr,
      vis,
      num,
      time,
      agree,
      tableData,
      search,
    };
  },
});
</script>

<style scoped>
.table {
  margin: 30px 30px;
}
#button {
  margin: 11px;
  width: 100%;
}
</style>
