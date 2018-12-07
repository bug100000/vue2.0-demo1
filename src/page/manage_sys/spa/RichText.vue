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
                <el-form ref="form">
                    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)">
                    </quill-editor>
                    <div ref="showText">{{showText}}</div>
                </el-form>
            </div>
            <button v-on:click="action">后退一个页面</button>
        </div>
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import { error } from "util";
export default {
    data() {
        return {
            content: null,
            editorOption: {},
            showText: ""
        };
    },
    mounted: function() {
        console.log(this.$route.query.id);
    },
    methods: {
        onEditorBlur(e) {
            //失去焦点事件
        },
        onEditorFocus(e) {
            //获得焦点事件
        },
        onEditorChange(e) {
            //内容改变事件
            let node = document
                .getElementsByClassName("ql-editor")[0]
                .cloneNode(true);
            let text = this.domToString(node);
            this.$refs.showText.innerHTML = text;
        },
        domToString(node) {
            let tmpNode = document.createElement("div");
            tmpNode.appendChild(node);
            let str = tmpNode.innerHTML;
            tmpNode = node = null; // 解除引用，以便于垃圾回收
            return str;
        },
        action() {
            // js控制后退一个页面
            this.$router.go(-1);
            // window.history.go(-1);
            // window.history.back();
        }
    }
};
</script>
