<template>
  <div id="login" class="login-box">
    <el-card class="box-card y-card">
      <div slot="header" class="clearfix y-card-header">
        <span>用户登录</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item class="yLabel" label="账号" prop="account">
          <el-input class="yInput" v-model.number="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item class="yLabel" label="密码" prop="pass">
          <el-input class="yInput" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="yLabel">
          <el-button class="ySubmit yInput" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </el-card>
    <div class="loginFooter">
      Copyright © 2006-2017 Nest, All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        var validateAccount = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入账号"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: "",
                account: ""
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                account: [{ validator: validateAccount, trigger: "blur" }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style>
#login {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
/* 自定义样式 */

.loginFooter{
    position: absolute;
    bottom: 7vh;
    margin-left: 50%;
    transform: translateX(-50%);
    color: #46556a;
    font-size: 14px;
    text-align: center;
    font-weight: 800;
    /* color: #a1a2a7; */
    /* font-size: 12px; */
    /* line-height: 27px; */
}

body{
    margin: 0;
}

.login-box{
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(../../assets/img/logBg.png);
    background-position:center;
}

.y-card {
    float: right;
    margin-right: 5vw;
    margin-top: 30vh;
    background-color: rgba(232,232,232,0.6) !important;
    border: none !important;
}

.ySubmit {
    width: 100%;
    background-color: #03202e;
    border-color: #03202e;
}

.yLabel label{
    text-align: left;
}

.yInput{
  margin-right: 50px;
}

.el-card__header{
    border-bottom: 1px solid rgba(50,50,58,0.13) !important;
}

.yLabel .el-form-item__label{
    width: 15% !important;
}

.yLabel .el-form-item__content {
    margin-left: 15% !important;
    width: 70%;
}

.yLabel .ySubmit {
    background-color: #03202e;
    border-color: #03202e;
}

/* 自定义样式 */

/* 卡片样式 */
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 480px;
}
/* 卡片样式 */
</style>
