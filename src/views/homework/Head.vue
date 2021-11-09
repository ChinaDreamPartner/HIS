<template>
  <div class="container">
    <div class="top">
      <img id="img-nefu" src="@/image/nefu.png" alt="东北林业大学" />
      <h1 id="top-h">HIS医院管理系统</h1>
    </div>
    <div>
      <img class="img-1" src="@/image/scenery.jpg" alt="风景" />
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.img-1 {
  width: 100%;
  height: 300px;
}
.top {
  display: flex;
  background-color: #00785a;
  height: 120px;
}
#top-h {
  align-content: center;
  margin: auto 0;
  color: #ebebeb;
  font-family: 隶书;
  font-size: 40px;
}
#img-nefu {
  width: 360px;
}
</style>
