<template>
  <div id="login">
    <el-card class="box-card y-card">
      <div slot="header" class="clearfix">
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
        <el-form-item>
          <el-button class="ySubmit yInput" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </el-card>
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

.y-card {
    float: right;
    margin-right: 5vw;
    margin-top: 30vh;
}

.ySubmit {
    width: 100%;
}

.yLabel label{
    text-align: left;
}

.yInput{
  margin-right: 50px;
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
