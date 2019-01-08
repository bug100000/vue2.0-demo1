<template>
    <el-row class="tac" id="yLeftNav">
        <el-col style="width: 201px;">
            <el-menu :router="true" default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#32323a" text-color="#9aa1a9" active-text-color="#fff">
                <el-menu-item index="1">
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
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-star-on"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="/vuex">
                    <i class="el-icon-location"></i>
                    <span slot="title">vuex</span>
                </el-menu-item>
                <el-menu-item index="/rich_text">
                    <i class="el-icon-picture"></i>
                    <span slot="title">富文本编辑器</span>
                </el-menu-item>
                <el-menu-item index="/upload">
                    <i class="el-icon-upload"></i>
                    <span slot="title">文件上传</span>
                </el-menu-item>
                <el-menu-item index="/list">
                    <i class="el-icon-phone"></i>
                    <span slot="title">列表</span>
                </el-menu-item>
                <el-menu-item index="/">
                    <i class="el-icon-d-caret"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "LeftNav",
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
#yLeftNav {
    flex: none;
    width: 201px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: rgb(50, 50, 58);
}
</style>
