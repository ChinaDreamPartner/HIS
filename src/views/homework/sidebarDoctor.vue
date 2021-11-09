<template>
  <div class="main-main">
    <div class="content-p-nav">
      <nav>
        <h2>
          <i class="el-icon-s-custom"></i>
          HIS医生端
        </h2>
        <ul>
          <li>
            <router-link to="/homework/ReserveM" @click="query1" class="i">
              <i class="el-icon-user-solid"></i>
              预约信息
            </router-link>
          </li>
          <li>
            <router-link
              to="/homework/Home"
              class="i"
              @click="
                query1();
                query2();
              "
            >
              <i class="el-icon-circle-plus"></i>
              个人信息管理
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="id"></div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { GET_COURSES, GET_LABCOURSES, GET_LABMESSAGE } from "@/store/VuexTypes";
import { Store, useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const query1 = () => {
      store.dispatch(GET_COURSES);
    };
    const query2 = () => {
      store.dispatch(GET_LABCOURSES);
    };
    return {
      query1,
      query2,
    };
  },
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main-main {
  display: flex;
}
#id {
  margin-top: 30px;
  width: 1px;
  height: 100%;
  background: darkgray;
}
.content-p-nav {
  display: inline-block;
  width: 300px;
  margin: 50px;
}
.content-p-nav a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 15px 0 15px 20px;
}
.content-p-nav h2 {
  background: #3185bf;
  color: white;
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.content-p-nav li {
  list-style: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
}
.content-p-nav li:hover a {
  color: white;
}
.content-p-nav h2 {
  background-color: rgb(0, 33, 71);
}

.content-p-nav h2 {
  border-radius: 0;
}
.content-p-nav li:hover {
  background: grey;
  color: white;
}
</style>
