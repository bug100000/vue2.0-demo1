<template>
    <div class="hello pulic-page-class">
        <div class="y-body-title">
            <img class="breadcrumb-left-verticalPole" src="../../../assets/img/indexIcon.png" alt="">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/rich_text' }">富文本编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="y-body-body" ref="yBodyBody">
            <div class="hello">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    }
};
</script>
