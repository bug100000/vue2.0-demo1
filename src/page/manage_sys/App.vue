<template>
    <div id="app">
        <div id="yTop" ref="yTop">
            <span class="theme"><img src="../../assets/img/logoicon.png" alt="">后台管理</span>
            <span class="Cancellation"><img src="../../assets/img/loginOuticon.png" alt=""> 注销</span>
            <span class="user"><img src="../../assets/img/systymAdminIcon.png" alt=""> admin</span>
        </div>
        <div id="yBodyBox" ref="yBodyBox">
            <el-row class="tac" id="yLeftNav">
                <el-col style="width: 201px;">
                    <el-menu :router="true" default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#32323a" text-color="#9aa1a9" active-text-color="#fff">
                        <el-menu-item index="/">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航一</span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航二</span>
                            </template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="/list">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-star-on"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航五</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-picture"></i>
                            <span slot="title">导航六</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <i class="el-icon-upload"></i>
                            <span slot="title">导航七</span>
                        </el-menu-item>
                        <el-menu-item index="8">
                            <i class="el-icon-phone"></i>
                            <span slot="title">导航八</span>
                        </el-menu-item>
                        <el-menu-item index="9">
                            <i class="el-icon-d-caret"></i>
                            <span slot="title">导航九</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
            <div id="yBody" ref="yBody">
                <router-view />
                <div class="y-body-footer">Copyright DAB</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    mounted: function() {
        // 顶部
        // this.$refs.yTop.style.width = document.documentElement.clientWidth + "px";
        // 下面大盒子
        this.$refs.yBodyBox.style.height =
            Number(document.documentElement.clientHeight) - 60 + "px";
        // 右面盒子
        // this.$refs.yBody.style.width = Number(document.documentElement.clientWidth) - 201 + "px";
        // 内容部分
        // this.$refs.yBodyBody.style.height = Number(document.documentElement.clientHeight) - 176 + "px";
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
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

/* 自定义样式 */

.pulic-page-class {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.el-menu-item,
.el-submenu__title {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

#yTop {
    flex: none;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 60px;
    background-color: #ebebf7;
}

#yBodyBox {
    flex: auto;
    position: relative;
    display: flex;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
}

#yLeftNav {
    flex: none;
    width: 201px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: rgb(50, 50, 58);
}

#yBody {
    flex: auto;
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    height: 100%;
    background-color: #fafafc;
}

.theme {
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

.Cancellation {
    float: right;
    line-height: 60px;
    margin-left: 50px;
    margin-right: 50px;
    cursor: pointer;
}

.Cancellation img {
    position: relative;
    top: 2px;
}

.user {
    float: right;
    line-height: 60px;
}

.user img {
    position: relative;
    top: 2px;
}

.y-body-title {
    flex: none;
    padding-left: 30px;
    height: 58px;
    line-height: 58px;
    border-top: 1px solid #dcdceb;
    border-bottom: 1px solid #dcdceb;
}

.y-body-title div {
    line-height: 58px;
}

.y-body-body {
    flex: auto;
    padding: 20px 30px;
    overflow: auto;
}

.y-body-footer {
    flex: none;
    padding-left: 20px;
    height: 58px;
    line-height: 58px;
    background-color: #e6ebec;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
}

/*滚动条样式*/

#yLeftNav::-webkit-scrollbar,
.y-body-body::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
#yLeftNav::-webkit-scrollbar-thumb,
.y-body-body::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
}
#yLeftNav::-webkit-scrollbar-track,
.y-body-body::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
}

/*滚动条样式*/

/* 自定义样式 */

/* element页面布局样式 */
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
/* 页面布局样式 */
</style>
