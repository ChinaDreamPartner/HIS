<template>
  <div>
    <el-button style="margin: 35px 5px 0 30px" @click="add">添加科室</el-button>
    <h1 class="table">已开科室</h1>
    <div style="width: 1000px">
      <el-table class="table" :data="tableData" style="width: 100%">
        <el-table-column label="科室编号" prop="id"></el-table-column>
        <el-table-column label="科室名" prop="name"></el-table-column>
        <el-table-column label="人员数量" prop="number"></el-table-column>
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
        </el-table-column>
        {{ Visible }}
        <el-table-column>
          <template v-slot="scope">
            <el-button @click="update(scope.row.id)" type="primary">
              修改信息
            </el-button>
            <el-dialog title="科室信息" v-model="Visible" center>
              <div class="table">
                <el-form label-width="80px" style="margin: 0">
                  <el-form-item label="科室编号">
                    <el-input v-model="f.id"></el-input>
                  </el-form-item>
                  <el-form-item label="科室名">
                    <el-input v-model="f.name"></el-input>
                  </el-form-item>
                  <el-form-item label="医生人数">
                    <el-input v-model="f.number"></el-input>
                  </el-form-item>
                  <el-form-item label="描述">
                    <el-input v-model="f.detail"></el-input>
                  </el-form-item>
                  <el-button id="button" type="primary" @click="updateForm">
                    修改信息
                  </el-button>
                </el-form>
              </div>
            </el-dialog>
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="width: 500px">
      <div class="table" v-if="vis">
        <h1 class="table">添加科室</h1>
        <el-form label-width="100px" style="margin: 0 -13px">
          <el-form-item label="科室编号">
            <el-input v-model="form.id" @input="change($event)"></el-input>
          </el-form-item>

          <el-form-item label="科室名">
            <el-input v-model="form.name" @input="change($event)"></el-input>
          </el-form-item>
          <el-form-item label="医生数量">
            <el-input v-model="form.number" @input="change($event)"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="form.detail"
              @input="change($event)"
            ></el-input>
          </el-form-item>
          <el-button id="button" type="primary" @click="submitForm(form)">
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
import { Lab } from "@/datasource/Types";
import {
  ADD_DEPARTMENT,
  DEL_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from "@/store/VuexTypes";
import { HIS_Department } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const vis = ref(false);
    const add = () => {
      vis.value = !vis.value;
    };
    const store: Store<State> = useStore();
    const tableData = computed(() => store.state._Department);
    const Visible = ref(false);
    const f = ref<HIS_Department>({});
    const form = ref<HIS_Department>({});
    const update = (id: string) => {
      console.log(1);
      const te = ref<HIS_Department>({});
      store.state._Department?.forEach((t) => {
        if (t.id == id) te.value = t;
      });
      f.value = te.value;
      Visible.value = true;
    };
    const submitForm = () => {
      store.dispatch(ADD_DEPARTMENT, form.value);
      Visible.value = false;
    };
    const del = (id: string) => {
      const firm = confirm("此操作将永久删除该信息, 是否继续?");
      if (firm == true) {
        store.dispatch(DEL_DEPARTMENT, id);
      }
    };
    const updateForm = () => {
      store.dispatch(UPDATE_DEPARTMENT, f);
    };
    return {
      vis,
      add,
      updateForm,
      f,
      Visible,
      update,
      tableData,
      form,
      submitForm,
      del,
      open,
    };
  },
  methods: {
    change(e: { $forceUpdate: () => void }) {
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
