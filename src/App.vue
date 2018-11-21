<template>
  <div id="app">
    <!-- <img src="./assets/img/logo_vue.png"> -->
    <div id="yTop" ref="yTop">
      <span class="theme"><img src="./assets/img/logoicon.png" alt="">后台管理</span>
      <span class="Cancellation">注销</span>
      <span class="user">admin</span>
    </div>
    <div id="yBodyBox" ref="yBodyBox">
      <el-row class="tac" id="yLeftNav">
        <el-col style="width: 201px;">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="border: none;">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <div id="yBody" ref="yBody">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "App",
    mounted: function() {
      
        // this.$refs.yTop.style.width = document.documentElement.clientWidth + "px";
        this.$refs.yBodyBox.style.height = Number(document.documentElement.clientHeight) - 60 + "px";
        // this.$refs.yBody.style.width = Number(document.documentElement.clientWidth) - 201 + "px";
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}

/* 自定义样式 */

.el-menu-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

#yTop {
    width: 100%;
    height: 60px;
    background-color: #ebebf7;
}

#yBodyBox {
    position: relative;
}

#yLeftNav {
    width: 201px;
    height: 100%;
    background-color: rgb(84, 92, 100);
}

#yBody {
    position: absolute;
    top: 0;
    left: 201px;
    height: 100%;
    background-color: gray;
}

.theme{
  position: relative;
  display: inline-block;
  width: 201px;
  height: 100%;
  color: white;
  background-color: #3d3e90;
  text-align: center;
  line-height: 60px;
}

.theme img {
  position: absolute;
  top: 7px;
  left: 20px;
  width: 45px;
  height: 45px;
}

.Cancellation{
  float: right;
}

.user{
  float: right;
}

/* 自定义样式 */

</style>
