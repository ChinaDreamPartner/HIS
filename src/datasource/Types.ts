////////////////////////////////
export interface HIS_Department {
  id?: string;
  name?: string;
  number?: number;
  detail?: string;
}
export interface HIS_Doctor {
  id?: string;
  name?: string;
  gender?: string;
  age?: number;
  workTime?: string;
  technical?: string;
  detail?: string;
}
export interface HIS_Doctor {
  id?: string;
  name?: string;
  gender?: string;
  age?: number;
  workTime?: string;
  technical?: string;
  detail?: string;
}
export interface HIS_User {
  id?: string;
  userName?: string;
  password?: string;
}
export interface HIS_DoctorMessage {
  lesson?: string;
  name?: string;
  technical?: string;
}
export interface HIS_U {
  name: string;
  gender?: string;
  age?: string;
  detail?: string;
}
///////////////////////////////
export interface Lab {
  //实验室信息
  id: string;
  number: number;
  detail: string;
}
//
export interface ClassroomMessage {
  id?: string;
  lesson?: string;
  courseName?: string;
  start?: number;
  end?: number;
  teacherName?: string;
  title?: string;
}
export interface CourseMessage {
  id?: string;
  teacherId?: string;
  courseName: string;
  start: number;
  end: number;
  teacherName: string;
  period: number;
  studentNumber: number;
}
export interface SelectMessage {
  labId?: string;
  courseName?: string;
  start?: number;
  end?: number;
  lesson?: string;
}
export interface User {
  role: number;
  userName?: string;
  password?: string;
}
export interface UserLogin {
  id?: string;
  name?: string;
  userName?: string;
  password?: string;
  role?: number;
}
export interface Teacher {
  id?: string;
  name?: string;
  title?: string;
  graduationSchool?: string;
  userName?: string;
  password?: string;
  detail?: string;
}
