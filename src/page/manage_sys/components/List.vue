<template>
    <div class="hello pulic-page-class">
        <div class="y-body-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/list' }">导航三</el-breadcrumb-item>
                <el-breadcrumb-item>表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-loading="loading" class="y-body-body" ref="yBodyBody">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="时间：">
                    <el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="用户名：">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域：">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <div>
                    <el-form-item label="审核状态：">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="3">备选项</el-radio>
                            <el-radio :label="6">备选项</el-radio>
                            <el-radio :label="9">备选项</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <el-table :data="tableData" border style="width: 100%" stripe>
                <el-table-column prop="date" label="日期">
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="age" label="年龄">
                </el-table-column>
                <el-table-column prop="sex" label="性别">
                </el-table-column>
                <el-table-column prop="phone" label="手机">
                </el-table-column>
                <el-table-column prop="personSignature" label="个性签名">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 20px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            pickerOptions2: {
                shortcuts: [
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    }
                ]
            },
            value4: [
                new Date(2000, 10, 10, 10, 10),
                new Date(2000, 10, 11, 10, 10)
            ],
            value5: "",
            formInline: {
                user: "",
                region: ""
            },
            radio2: 3,
            tableData: [],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            // 指定元素加载中
            loading: true
        };
    },
    mounted: function() {
        var ajaxDate = [
            {
                date: "2016-05-02",
                name: "王小虎",
                age: "18",
                sex: "男",
                phone: "18000000000",
                personSignature: "世界那么大，我想去看看！",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-02",
                name: "王小虎",
                age: "18",
                sex: "男",
                phone: "18000000000",
                personSignature: "世界那么大，我想去看看！",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-02",
                name: "王小虎",
                age: "18",
                sex: "男",
                phone: "18000000000",
                personSignature: "世界那么大，我想去看看！",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-02",
                name: "王小虎",
                age: "18",
                sex: "男",
                phone: "18000000000",
                personSignature: "世界那么大，我想去看看！",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-02",
                name: "王小虎",
                age: "18",
                sex: "男",
                phone: "18000000000",
                personSignature: "世界那么大，我想去看看！",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-02",
                name: "王小虎",
                age: "18",
                sex: "男",
                phone: "18000000000",
                personSignature: "世界那么大，我想去看看！",
                address: "上海市普陀区金沙江路 1518 弄"
            }
        ];
        // console.log(this.tableData);
        this.tableData = ajaxDate;

        // 指定元素加载中
        setTimeout(() => {
            this.loading = false;
        }, 2000);

        // 全屏加载中
        // const loading = this.$loading({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // });
        // setTimeout(() => {
        //   loading.close();
        // }, 3000);
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleClick(row) {
            console.log(row);
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
