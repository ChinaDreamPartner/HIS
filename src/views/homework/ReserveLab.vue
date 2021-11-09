<template>
  <div id="id">
    <h1>实验室预约</h1>
    <div class="classroom">
      实验教室：
      <el-select v-model="number" filterable placeholder="请选择">
        <el-option
          v-for="(l, index) in id"
          :key="index"
          :label="`丹青${l}`"
          :value="l"
        >
          丹青{{ l }}
        </el-option>
      </el-select>

      <el-button class="button" @click="query(number)">查询</el-button>
    </div>

    <div>
      <div class="classroom">
        实验课程：

        <el-select
          v-model="selectMessage.courseName"
          filterable
          placeholder="请选择"
        >
          <el-option
            v-for="(l, index) in course"
            :key="index"
            :label="l.courseName"
            :value="l.courseName"
          >
            {{ l.courseName }}
          </el-option>
        </el-select>
      </div>
      <div class="classroom">
        起始周次：

        <el-select
          v-model="selectMessage.start"
          filterable
          placeholder="请选择"
        >
          <el-option
            v-for="(l, index) in 18"
            :key="index"
            :label="`第${l}周`"
            :value="l"
          >
            第{{ l }}周
          </el-option>
        </el-select>
      </div>

      <div class="classroom">
        结束周次：
        <el-select v-model="selectMessage.end" filterable placeholder="请选择">
          <el-option
            v-for="(l, index) in 18"
            :key="index"
            :label="`第${l}周`"
            :value="l"
          >
            第{{ l }}周
          </el-option>
        </el-select>
      </div>

      <div class="classroom">
        课程节次：
        <el-select
          v-model="selectMessage.lesson"
          filterable
          placeholder="请选择"
        >
          <template v-for="(l, index) of 7" :key="index">
            <el-option
              v-for="(r, index) in 5"
              :key="index"
              :label="`周${l}第${r}节课`"
              :value="`0${l}0${r}`"
            >
              周{{ l }}第{{ r }}节课
            </el-option>
          </template>
        </el-select>
        <el-button class="button" @click="select">选课</el-button>
      </div>
    </div>
    <div class="table">
      <table border="10px solid black" width="1000px" height="800px">
        <tr>
          <th width="9%"></th>
          <th width="13%">星期一</th>
          <th width="13%">星期二</th>
          <th width="13%">星期三</th>
          <th width="13%">星期四</th>
          <th width="13%">星期五</th>
          <th width="13%">星期六</th>
          <th width="13%">星期天</th>
        </tr>
        <tr>
          <td>第一节课</td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0101' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0201'">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0301' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0401' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0501' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0601' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0701' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
        </tr>
        <tr>
          <td>第二节课</td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0102' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0202'">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
              </template>
              <br />
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0302' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0402' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0502' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0602' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0702' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
        </tr>
        <tr>
          <td>第三节课</td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0103' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0203'">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
              </template>
              <br />
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0303' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0403' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0503' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0603' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0703' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
        </tr>
        <tr>
          <td>第四节课</td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0104' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0204'">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
              </template>
              <br />
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0304' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0404' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0504' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0604' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0704' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
        </tr>
        <tr>
          <td>第五节课</td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0105' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0205'">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
              </template>
              <br />
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0305' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0405' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0505' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0605' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
                <br />
              </template>
            </template>
          </td>
          <td>
            <template v-for="(n, index) of classroomMessage" :key="index">
              <template v-if="n.lesson == '0705' && n.courseName != null">
                {{ n.courseName }}--{{ n.start }}周-{{ n.end }}周--{{
                  n.teacherName
                }}{{ n.title }}
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
import { computed, defineComponent, watch, ref } from "vue";
import axios from "axios";
import { ClassroomMessage, SelectMessage } from "@/datasource/Types";
import { useRoute } from "vue-router";
import { ADD_COURSEMESSAGE, GET_LABMESSAGE } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const classroomNumber = computed(() => store.state.Labs);
    const number = ref<string>();
    const course = computed(() => store.state.courseMessage);
    const u = store.state.name;
    const id = computed(() => store.state.id);
    const selectMessage = ref<SelectMessage>({});
    selectMessage.value.courseName = u;
    selectMessage.value.labId = computed(
      () => number.value
    ) as unknown as string;
    const classroomMessage = computed(() => {
      return store.state.classroomMessage;
    });
    const query = (number: number) => {
      store.dispatch(GET_LABMESSAGE, number);
    };
    const select = () => {
      store.dispatch(ADD_COURSEMESSAGE, selectMessage.value);
    };
    return {
      classroomNumber,
      number,
      query,
      classroomMessage,
      selectMessage,
      select,
      course,
      id,
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
</style>
