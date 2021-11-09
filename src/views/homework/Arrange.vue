<template>
  <div id="id">
    <h1>医生排班管理</h1>
    <div class="classroom">
      <div class="pb">
        查询排班情况：
        <el-button @click="query()">查询</el-button>
      </div>
      <div class="pb">
        选择工作星期：
        <el-select v-model="num" filterable placeholder="请选择">
          <el-option
            v-for="(l, index) in 7"
            :key="index"
            :label="`星期${l}`"
            :value="`0${l}`"
          >
            星期{{ l }}
          </el-option>
        </el-select>
      </div>
      <div class="pb">
        选择工作时间：
        <el-select v-model="time" filterable placeholder="请选择">
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
    </div>

    <div>
      <div class="classroom">医生排班表：</div>
    </div>
    <div class="table">
      <table border="10px solid black" width="800px" height="200px">
        <tr>
          <th width="10%"></th>
          <th width="13%">星期一</th>
          <th width="13%">星期二</th>
          <th width="13%">星期三</th>
          <th width="13%">星期四</th>
          <th width="13%">星期五</th>
          <th width="13%">星期六</th>
          <th width="13%">星期天</th>
        </tr>
        <tr>
          <th>8:00-16:00</th>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0101' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0201' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0301' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0401' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0501' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0601' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0701' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
        </tr>
        <tr>
          <th>16:00-24:00</th>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0102' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0202' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0302' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0402' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0502' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0602' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0702' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
        </tr>
        <tr>
          <th>24:00-8:00</th>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0103' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0203' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0303' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0403' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0503' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0603' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of doctorMessage" :key="index">
              <template v-if="n.lesson == '0703' && n.name != null">
                {{ n.name }}--{{ n.technical }}
                <br />
              </template>
            </template>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { GET_MESSAGE, ADD_MESSAGE } from "@/store/VuexTypes";
import { HIS_DoctorMessage } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const qr = () => {
      store.dispatch(ADD_MESSAGE, form.value);
    };
    const number = ref<string>();
    const num = ref<string>("");
    const time = ref<string>("");
    const store: Store<State> = useStore();
    const doctorMessage = computed(() => store.state._doctorMessage);
    const query = () => {
      store.dispatch(GET_MESSAGE);
    };
    const form = ref<HIS_DoctorMessage>({
      name: "",
      lesson: "",
      technical: "",
    });
    form.value.lesson = computed(
      () => num.value + time.value
    ) as unknown as string;
    form.value.name = store.state._message.name;
    form.value.technical = store.state._message.technical;
    return {
      qr,
      form,
      query,
      doctorMessage,
      number,
      num,
      time,
    };
  },
});
</script>

<style scoped>
#id {
  margin: 20px 30px;
  display: block;
}
.classroom {
  margin: 10px 0;
}
.button {
  margin: 0 10px;
}
.table {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.pb {
  padding: 6px 0;
}
</style>
