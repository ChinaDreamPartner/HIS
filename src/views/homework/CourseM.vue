<template>
  <div>
    <h1 class="table">已开课程</h1>
    <div style="width: 1000px">
      <el-table class="table" :data="tableData" style="width: 100%">
        <el-table-column label="课程编号" prop="id"></el-table-column>
        <el-table-column label="课程名称" prop="courseName"></el-table-column>
        <el-table-column label="开课周次" prop="start"></el-table-column>
        <el-table-column label="结课周次" prop="end"></el-table-column>
        <el-table-column label="授课教师" prop="teacherName"></el-table-column>
        <el-table-column
          label="课程人数"
          prop="studentNumber"
        ></el-table-column>
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template v-slot="scope">
            <el-button type="danger" @click="del(scope.row.id)">
              删除课程
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="width: 500px">
      <h1 class="table">添加课程</h1>
      <div class="table">
        <el-form label-width="80px">
          <el-form-item label="课程名称">
            <el-input
              v-model="form.courseName"
              @input="change($event)"
            ></el-input>
          </el-form-item>

          <el-form-item label="授课老师">
            <el-input
              v-model="form.teacherName"
              @input="change($event)"
            ></el-input>
          </el-form-item>
          <el-form-item label="学时数">
            <el-input v-model="form.period" @input="change($event)"></el-input>
          </el-form-item>
          <el-form-item label="学生数量">
            <el-input
              v-model="form.studentNumber"
              @input="change($event)"
            ></el-input>
          </el-form-item>
          <el-form-item label="开课时间">
            <el-select v-model="form.start" placeholder="请选择开课时间">
              <el-option
                v-for="(l, index) in 18"
                :key="index"
                :label="`第${l}周`"
                :value="l"
              >
                第{{ l }}周
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="结课时间">
            <el-select v-model="form.end" placeholder="请选择结课时间">
              <el-option
                v-for="(l, index) in 18"
                :key="index"
                :label="`第${l}周`"
                :value="l"
              >
                第{{ l }}周
              </el-option>
            </el-select>
          </el-form-item>
          <el-button id="button" type="primary" @click="submitForm()">
            提交
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { CourseMessage, SelectMessage } from "@/datasource/Types";
import { ADD_COURSE, DEL_COURSE } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const tableData = computed(() => store.state.courseMessage);
    const selectMessage = ref<SelectMessage>({});
    const form = ref<CourseMessage>({
      courseName: "",
      teacherName: "",
      start: 1,
      end: 1,
      period: 0,
      studentNumber: 0,
    });
    const submitForm = () => {
      store.dispatch(ADD_COURSE, form.value);
    };
    const del = (id: string) => {
      const firm = confirm("此操作将永久删除该信息, 是否继续?");
      if (firm == true) {
        store.dispatch(DEL_COURSE, id);
      }
    };
    return {
      tableData,
      form,
      selectMessage,
      submitForm,
      del,
    };
  },
  methods: {
    change(e: { $forceUpdate: () => void }) {
      e.$forceUpdate();
    },
    selectPlatform(e: { $forceUpdate: () => void }) {
      //  alert(e);
      e.$forceUpdate();
    },
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
