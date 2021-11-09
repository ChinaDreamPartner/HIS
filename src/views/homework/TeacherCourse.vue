<template>
  <div style="width: 1000px">
    <h1 class="table">实验选课：</h1>
    <el-table class="table" :data="tableData" style="width: 100%">
      <el-table-column label="课程名称" prop="courseName"></el-table-column>
      <el-table-column label="开课周次" prop="start"></el-table-column>
      <el-table-column label="结课周次" prop="end"></el-table-column>
      <el-table-column label="授课教师" prop="teacherName"></el-table-column>
      <el-table-column label="课程人数" prop="studentNumber"></el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template v-slot="scope">
          <router-link to="/homework/ReserveLab">
            <el-button
              @click="
                select(scope.row.courseName);
                query;
                query1(scope.row.studentNumber);
              "
            >
              实验选课
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <h1 class="table">预约实验信息：</h1>
    <el-table class="table" :data="data" style="width: 100%">
      <el-table-column label="课程名称" prop="courseName"></el-table-column>
      <el-table-column label="开课周次" prop="start"></el-table-column>
      <el-table-column label="结课周次" prop="end"></el-table-column>
      <el-table-column label="授课教师" prop="teacherName"></el-table-column>
      <el-table-column label="授课教室" prop="labId"></el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template v-slot="scope">
          <el-button @click="del(scope.row.id)">取消预约</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { DEL_LABCOURSE, GET_LAB, GET_LABBYNUMBER } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const tableData = computed(() => store.state.courseMessage);
    const data = computed(() => store.state.reserveMessage);
    const select = (name: string) => {
      store.state.name = name;
    };
    const query = () => {
      store.dispatch(GET_LAB);
    };
    const query1 = (number: number) => {
      store.dispatch(GET_LABBYNUMBER, number);
    };
    const del = (id: string) => {
      const firm = confirm("是否确认取消预约?");
      if (firm == true) {
        store.dispatch(DEL_LABCOURSE, id);
      }
    };
    return {
      tableData,
      select,
      query,
      query1,
      data,
      del,
    };
  },
});
</script>
<style scoped>
.table {
  margin: 30px 30px;
}
</style>
