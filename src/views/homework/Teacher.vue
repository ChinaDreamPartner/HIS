<template>
  <div>
    <el-button style="margin: 35px 5px 0 30px" @click="add">添加医生</el-button>
    <h1 class="table">医生信息</h1>
    <el-table class="table" :data="tableData" style="width: 1000px">
      <el-table-column
        label="医生编号"
        prop="id"
        style="width: 200px"
      ></el-table-column>
      <el-table-column
        label="医生姓名"
        prop="name"
        style="width: 200px"
      ></el-table-column>
      <el-table-column
        label="性别"
        prop="gender"
        style="width: 200px"
      ></el-table-column>
      <el-table-column
        label="年龄"
        prop="age"
        style="width: 200px"
      ></el-table-column>
      <el-table-column
        label="所属科室"
        prop="technical"
        style="width: 200px"
      ></el-table-column>
      <el-table-column label=" " prop=" "></el-table-column>
      <el-table-column align="right">
        <template v-slot="scope">
          <el-button @click="query(scope.row.id)" type="primary">
            查看详细
          </el-button>
          <el-dialog title="医生信息" v-model="dialogVisible" center>
            <div class="word" v-if="dialogVisible">
              {{ msg }}
            </div>

            <div class="word">{{ detail }}</div>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template v-slot="scope">
          <el-button @click="update(scope.row.id)" type="warning">
            修改信息
          </el-button>
          <el-dialog title="医生信息" v-model="Visible" center>
            <div class="table">
              <el-form label-width="80px" style="margin: 0">
                <el-form-item label="医生姓名">
                  <el-input v-model="f.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-input v-model="f.gender"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                  <el-input v-model="f.age"></el-input>
                </el-form-item>
                <el-form-item label="所属科室">
                  <el-input v-model="f.technical"></el-input>
                </el-form-item>
                <el-form-item label="医生简介">
                  <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="请输入内容"
                    v-model="f.detail"
                  ></el-input>
                </el-form-item>
                <el-button id="button" type="primary" @click="updateForm">
                  修改信息
                </el-button>
              </el-form>
            </div>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template v-slot="scope">
          <el-button @click="del(scope.row.id)" type="danger">
            删除信息
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="width: 500px" v-if="vis">
      <h1 class="table">添加医生</h1>
      <div class="table">
        <el-form label-width="80px" style="margin: 0">
          <el-form-item label="医生姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.gender"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="所属科室">
            <el-input v-model="form.technical"></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="fm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="fm.password"></el-input>
          </el-form-item>
          <el-form-item label="医生简介">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="form.detail"
            ></el-input>
          </el-form-item>
          <el-button id="button" type="primary" @click="submitForm()">
            添加医生
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, Ref, ref } from "vue";
import { HIS_Doctor, HIS_User, Teacher } from "@/datasource/Types";
import {
  ADD_DOCTOR,
  ADD_TEACHER,
  ADD_USER,
  DEL_DOCTOR,
  DEL_TEACHER,
  MODIFY_TEACHER,
  UPDATE_DOCTOR,
} from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const fm = ref<HIS_User>({});
    const vis = ref(false);
    const add = () => {
      vis.value = !vis.value;
    };
    const store: Store<State> = useStore();
    const tableData = computed(() => store.state._Doctor);
    const s = sessionStorage.getItem("token");
    const se = ref(s);
    const dialogVisible = ref(false);
    const detail = ref<string>();
    const Visible = ref(false);
    const f = ref<HIS_Doctor>({});
    const msg = ref<string>();
    const form = ref<HIS_Doctor>({});
    const change = (e: { $forceUpdate: () => void }) => {
      e.$forceUpdate();
    };
    const update = (id: string) => {
      const te = ref<HIS_Doctor>({});
      store.state._Doctor?.forEach((t) => {
        if (t.id == id) te.value = t;
      });
      f.value = te.value;
      Visible.value = true;
    };
    const query = (id: string) => {
      //dialogVisible.value = true;
      let flag = 0;
      setTimeout(() => {
        dialogVisible.value = true;
      }, 300);
      tableData.value?.forEach((t) => {
        //alert(t.id + " " + id);
        if (t.id == id && flag == 0) {
          detail.value = t.detail;
          msg.value = t.name;
          flag = 1;
        }
      });
    };
    const del = (id: string) => {
      const firm = confirm("此操作将永久删除该信息, 是否继续?");
      if (firm == true) {
        store.dispatch(DEL_DOCTOR, id);
      }
    };
    const submitForm = () => {
      store.dispatch(ADD_DOCTOR, form.value);
      store.dispatch(ADD_USER, fm.value);
    };
    const updateForm = () => {
      const firm = confirm("此操作将永久修改该信息, 是否继续?");
      if (firm == true) {
        store.dispatch(UPDATE_DOCTOR, f.value);
        Visible.value = false;
      }
    };
    return {
      fm,
      vis,
      add,
      tableData,
      form,
      change,
      query,
      dialogVisible,
      detail,
      submitForm,
      se,
      update,
      del,
      Visible,
      f,
      updateForm,
      msg,
    };
  },
});
</script>
<style scoped>
.table {
  margin: 30px 30px;
}
#button {
  margin: 0 10px;
  width: 100%;
}
.word {
  font-size: 20px;
}
</style>
