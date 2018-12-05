<template>
    <div class="hello pulic-page-class">
        <div class="y-body-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <img class="breadcrumb-left-verticalPole" src="../../../assets/img/indexIcon.png" alt="">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="y-body-body" ref="yBodyBody">
            <div class="hello">
                <div>home</div>
                <h1>活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表</h1>
                <h1>活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表活动列表</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted: function() {
        // 内容部分
        // this.$refs.yBodyBody.style.height = Number(document.documentElement.clientHeight) - 176 + "px";
    }
};
</script>
