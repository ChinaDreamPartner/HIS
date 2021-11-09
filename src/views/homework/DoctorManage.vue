<template>
  <div>
    <div>
      <h1 class="table">医生排班</h1>
    </div>
    <div class="container">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
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
          <template v-slot="scope">
            <router-link to="/homework/Arrange">
              <el-button
                @click="
                  select(scope.row.name, scope.row.technical);
                  query;
                  query1(scope.row.studentNumber);
                "
              >
                医生排班
              </el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const tableData = computed(() => store.state._Doctor);
    const select = (name: string, technical: string) => {
      store.state._message.name = name;
      store.state._message.technical = technical;
    };
    return {
      select,
      tableData,
    };
  },
});
</script>

<style scoped>
.container {
  padding: 30px 60px;
}
.button {
  margin: 3px;
}
.table {
  margin: 30px 30px 0 30px;
}
</style>
