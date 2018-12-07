<template>
    <div class="hello pulic-page-class">
        <div class="y-body-title">
            <img class="breadcrumb-left-verticalPole" src="../../../assets/img/indexIcon.png" alt="">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/upload' }">上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="y-body-body" ref="yBodyBody">
            <div class="hello">
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <button v-on:click="action">点击跳往富文本页面</button>
            <button v-on:click="$emit('enlarge-text', 1)">触发父级事件</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            fileList2: [
                {
                    name: "food.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                },
                {
                    name: "food2.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                },
                {
                    name: "food2.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                }
            ]
        };
    },
    mounted: function() {
        // 内容部分
        // this.$refs.yBodyBody.style.height = Number(document.documentElement.clientHeight) - 176 + "px";
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        action() {
            // js控制路由跳转
            this.$router.push({
                path: "/rich_text",
                query: {
                    id: 111
                }
            });
        }
    }
};
</script>
