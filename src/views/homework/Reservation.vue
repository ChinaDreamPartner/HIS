<template>
  <div style="width: 800px">
    <h1 class="table">预约信息：</h1>
    <el-table
      class="table"
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="gender"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="预约医生" prop="doctorName"></el-table-column>
      <el-table-column label="预约时间" sortable prop="time"></el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template v-slot="scope">
          <el-button @click="del(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const agree = store.state.agree;
    const search = ref<string>();
    const tableData = [
      {
        name: "王浩",
        gender: "男",
        age: 20,
        doctorName: "王琦",
        time: "2020-10-10",
      },
      {
        name: "user",
        gender: "男",
        age: 20,
        doctorName: "王琦",
        time: "2021-11-8",
      },
      {
        name: "李飞",
        gender: "男",
        age: 20,
        doctorName: "wb",
        time: "2021-11-8",
      },
    ];
    return {
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
