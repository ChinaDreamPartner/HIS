<template>
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
        <el-button id="button" type="primary" @click="submitForm(form)">
          提交
        </el-button>
      </el-form>
    </div>
  </div>
</template>
