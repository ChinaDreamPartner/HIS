import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    props: true,
    path: "/homework/Reserve",
    component: () => import("@/views/homework/Reserve.vue"),
  },
  {
    props: true,
    path: "/homework/Home",
    component: () => import("@/views/homework/Home.vue"),
  },
  {
    props: true,
    path: "/homework/doctorA",
    component: () => import("@/views/homework/DoctorManage.vue"),
  },
  {
    props: true,
    path: "/homework/Arrange",
    component: () => import("@/views/homework/Arrange.vue"),
  },
  {
    props: true,
    path: "/homework/teacherCourse",
    component: () => import("@/views/homework/TeacherCourse.vue"),
  },
  {
    props: true,
    path: "/homework/ReserveM",
    component: () => import("@/views/homework/Reservation.vue"),
  },
  {
    props: true,
    path: "/homework/LabM",
    component: () => import("@/views/homework/LabManage.vue"),
  },
  {
    props: true,
    path: "/homework/doctorM",
    component: () => import("@/views/homework/Teacher.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
