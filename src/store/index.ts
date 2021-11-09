import { ActionTree, createStore, MutationTree } from "vuex";
import {
  HIS_U,
  HIS_DoctorMessage,
  HIS_User,
  HIS_Department,
  HIS_Doctor,
  Lab,
  CourseMessage,
  Teacher,
  UserLogin,
  User,
  SelectMessage,
  ClassroomMessage,
} from "@/datasource/Types";
import * as vxt from "@/store/VuexTypes";
import axios from "@/axios";
import { ResultVO } from "@/mock";
import { ElMessage } from "element-plus";

export interface State {
  _u: HIS_U;
  _doctorMessage: HIS_DoctorMessage[];
  _Department: HIS_Department[];
  _Doctor: HIS_Doctor[];
  _User: HIS_User;
  _message: HIS_DoctorMessage;
  //HIS
  data: any;
  agree: number; //登录不同页面后的渲染
  user: UserLogin; //新创建的用户
  Labs?: Lab[]; //实验室信息
  courseMessage: CourseMessage[]; //课程信息
  classroomMessage: ClassroomMessage[]; //基于实验室号预约实验室信息
  teachers?: Teacher[]; //老师信息
  name: string; //实验选课选中后的课程，将设为预约里的默认课程
  id: number[]; //基于人数搜索教室返回的教室号
  reserveMessage: ClassroomMessage[]; //预约实验室信息
}
const myState: State = {
  _u: { name: "" },
  _message: {},
  _Department: [],
  _Doctor: [],
  _User: {},
  _doctorMessage: [],
  //HIS
  data: {},
  agree: 0,
  user: {},
  Labs: [],
  courseMessage: [],
  classroomMessage: [],
  name: "",
  teachers: [],
  id: [],
  reserveMessage: [],
};
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_EXCEPTION]: (state, data: any) => (state.data = data),
  [vxt.UPDATE_COURSES]: (state, data: CourseMessage[]) =>
    (state.courseMessage = data),
  [vxt.LOGIN]: (state, data: User) => (state.user = data),
  [vxt.UPDATE_TEACHER]: (state, data: Teacher[]) => (state.teachers = data),
  [vxt.UPDATE_LAB]: (state, data: Lab[]) => (state.Labs = data),
  [vxt.GET_TEACHER]: (state, data: Teacher[]) => (state.teachers = data),
  [vxt.UPDATE_ID]: (state, data: number[]) => (state.id = data),
  [vxt.UPDATE_LABMESSAGE]: (state, data: CourseMessage[]) => (
    data.sort((a, b) => a.start - b.start), (state.classroomMessage = data)
  ),
  [vxt.UPDATE_CLASSMESSAGE]: (state, data: ClassroomMessage[]) =>
    (state.classroomMessage = data),
  [vxt.UPDATE_RESERVEMESSAGE]: (state, data: any) =>
    (state.reserveMessage = data),
  //<------------------------------------------------------------------------------------------------------------------>
  [vxt.GET_DEPARTMENT]: (state, data: any) => (state._Department = data),
  [vxt.GET_DOCTOR]: (state, data: any) => (state._Doctor = data),
  [vxt.GET_USER]: (state, data: any) => (state._User = data),
  [vxt.GET_MESSAGE]: (state, data: any) => (state._doctorMessage = data),
};

//<------------------------------------------------------------------------------------------------------------------>

const myActions: ActionTree<State, State> = {
  [vxt.ADD_MESSAGE]: async ({ commit }, data: HIS_DoctorMessage) => {
    const resp = await axios.post<ResultVO>("/api/admin/addMessage", data);
    console.log(resp);
    commit(vxt.GET_MESSAGE, resp.data.data.messages);
  },
  [vxt.GET_MESSAGE]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/admin/getMessages");
    console.log(resp);
    commit(vxt.GET_MESSAGE, resp.data.data.messages);
  },
  [vxt.ADD_USER]: async ({ commit }, data: HIS_User) => {
    const resp = await axios.post<ResultVO>("/api/admin/add", data);
    console.log(resp);
    commit(vxt.GET_DOCTOR, resp.data.data.doctors);
  },
  [vxt.DEL_DOCTOR]: async ({ commit }, id: number) => {
    const resp = await axios.delete<ResultVO>(`/api/admin/doctor/delete/${id}`);
    console.log(resp);
    commit(vxt.GET_DOCTOR, resp.data.data.doctors);
  },
  [vxt.GET_DOCTOR]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/admin/doctor/getAll");
    console.log(resp);
    commit(vxt.GET_DOCTOR, resp.data.data.doctors);
  },
  [vxt.ADD_DOCTOR]: async ({ commit }, data: HIS_Doctor) => {
    const resp = await axios.post<ResultVO>("/api/admin/doctor/insert", data);
    console.log(resp);
    commit(vxt.GET_DOCTOR, resp.data.data.doctors);
  },
  [vxt.UPDATE_DOCTOR]: async ({ commit }, data: HIS_Doctor) => {
    const resp = await axios.patch<ResultVO>("/api/admin/doctor/update", data);
    console.log(resp);
    commit(vxt.GET_DOCTOR, resp.data.data.doctors);
  },
  [vxt.DEL_DEPARTMENT]: async ({ commit }, id: number) => {
    const resp = await axios.delete<ResultVO>(`/api/admin/delete/${id}`);
    console.log(resp);
    commit(vxt.GET_DEPARTMENT, resp.data.data.technicalOffice);
  },
  [vxt.GET_DEPARTMENT]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/admin/getAll");
    console.log(resp);
    commit(vxt.GET_DEPARTMENT, resp.data.data.technicalOffice);
  },
  [vxt.ADD_DEPARTMENT]: async ({ commit }, data: HIS_Department) => {
    const resp = await axios.post<ResultVO>("/api/admin/insert", data);
    console.log(resp);
    commit(vxt.GET_DEPARTMENT, resp.data.data.technicalOffice);
  },
  [vxt.UPDATE_DEPARTMENT]: async ({ commit }, data: HIS_Department) => {
    const resp = await axios.patch<ResultVO>("/api/admin/update", data);
    console.log(resp);
    commit(vxt.GET_DEPARTMENT, resp.data.data.technicalOffice);
  },
  //<------------------------------------------------------------------------------------------------------------------>
  //用户登录请求，登录成功跳转对应页面，失败则弹出错误提示
  [vxt.LOGIN]: async ({ commit }, data: User) => {
    console.log(data);
    const resp = await axios.post<ResultVO>("/api/login", data);
    if (resp.data.code != 200) {
      alert(1);
      ElMessage.error("用户名或密码错误");
    }
    sessionStorage.setItem("token", resp.headers.token);
    console.log(resp);
    commit(vxt.LOGIN, resp.data.data);
    return Promise.resolve(resp.data.data.user);
  },

  //管理员端<----------------------------------------------------------------->

  //获取所有用户信息
  [vxt.GET_TEACHER]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/admin/getUsers");
    commit(vxt.GET_TEACHER, resp.data.data.teachers);
  },
  // 获取老师信息
  [vxt.UPDATE_TEACHER]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/admin/getUsers");
    commit(vxt.GET_TEACHER, resp.data.data.teachers);
  },
  //添加老师
  [vxt.ADD_TEACHER]: async ({ commit }, teacher: Teacher) => {
    const resp = await axios.post<ResultVO>("/api/admin/add", teacher);
    commit(vxt.UPDATE_TEACHER, resp.data.data.teachers);
  },
  // 修改老师信息
  [vxt.MODIFY_TEACHER]: async ({ commit }, teacher: Teacher) => {
    console.log(1);
    const resp = await axios.patch<ResultVO>("/api/admin/updateUser", teacher);
    console.log(resp);
    commit(vxt.GET_TEACHER, resp.data.data.teachers);
  },
  //基于教师id删除某一教师用户
  [vxt.DEL_TEACHER]: async ({ commit }, id: number) => {
    console.log(id);
    const resp = await axios.delete<ResultVO>(`/api/admin/delete/${id}`);
    commit(vxt.UPDATE_TEACHER, resp.data.data.teachers);
  },
  //获取所有实验室信息
  [vxt.GET_LAB]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/admin/allLab");
    commit(vxt.UPDATE_LAB, resp.data.data.lab);
  },
  //添加实验室
  [vxt.ADD_LAB]: async ({ commit }, lab: Lab) => {
    const resp = await axios.post<ResultVO>("/api/admin/insertLab", lab);
    console.log(resp);
    commit(vxt.UPDATE_LAB, resp.data.data.lab);
  },
  //删除实验室
  [vxt.DEL_LAB]: async ({ commit }, id: string) => {
    console.log(id);
    const resp = await axios.delete<ResultVO>(`/api/admin/deleteLab/${id}`);
    console.log(resp);
    commit(vxt.UPDATE_LAB, resp.data.data.lab);
  },

  //教师端<--------------------------------------------------------------------->

  //基于请求中的教师自带的uid 获取教授课程信息
  [vxt.GET_COURSES]: async ({ commit }) => {
    const resp = await axios.get<ResultVO>("/api/teacher/getCourse");
    commit(vxt.UPDATE_COURSES, resp.data.data.courses);
  },
  //添加课程
  [vxt.ADD_COURSE]: async ({ commit }, course: CourseMessage) => {
    const resp = await axios.post<ResultVO>(
      "/api/teacher/insertCourse",
      course
    );
    commit(vxt.UPDATE_COURSES, resp.data.data.courses);
  },
  //基于id删除课程
  [vxt.DEL_COURSE]: async ({ commit }, id: string) => {
    const resp = await axios.delete<ResultVO>(
      `/api/teacher/deleteCourse/${id}`
    );
    commit(vxt.UPDATE_COURSES, resp.data.data.courses);
  },
  //基于学生数量获取能容纳该数量的教室号
  [vxt.GET_LABBYNUMBER]: async ({ commit }, number: number) => {
    const resp = await axios.get<ResultVO>(`/api/getLab/${number}`);
    commit(vxt.UPDATE_ID, resp.data.data.id);
  },
  //基于实验室编号获取预约信息
  [vxt.GET_LABMESSAGE]: async ({ commit }, number: string) => {
    const resp = await axios.get<ResultVO>(`/api/classMessage/${number}`);
    console.log(resp);
    commit(vxt.UPDATE_LABMESSAGE, resp.data.data.message);
  },
  //查询预约信息
  [vxt.GET_LABCOURSES]: async ({ commit }) => {
    console.log(1);
    const resp = await axios.get<ResultVO>("api/teacher/getMyMessage");
    console.log(1);
    console.log(resp);
    commit(vxt.UPDATE_RESERVEMESSAGE, resp.data.data.message);
  },
  //添加预约信息
  [vxt.ADD_COURSEMESSAGE]: async ({ commit }, message: SelectMessage) => {
    console.log(1);
    const resp = await axios.post<ResultVO>(
      `/api/classMessage/insert`,
      message
    );
    console.log(1);
    console.log(resp);
    commit(vxt.UPDATE_LABMESSAGE, resp.data.data.message);
  },
  //取消预约信息
  [vxt.DEL_LABCOURSE]: async ({ commit }, id: string) => {
    console.log(id);
    const resp = await axios.delete<ResultVO>(
      `/api/teacher/deleteMessage/${id}`
    );
    console.log(1);
    console.log(resp);
    commit(vxt.UPDATE_LABMESSAGE, resp.data.data.message);
  },
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {},
});
