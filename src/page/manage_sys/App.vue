<template>
    <div id="app">
        <div id="yTop" ref="yTop">
            <span class="theme"><img src="../../assets/img/logoicon.png" alt="">后台管理</span>
            <span class="Cancellation"><img src="../../assets/img/loginOuticon.png" alt=""> 注销</span>
            <span class="user"><img src="../../assets/img/systymAdminIcon.png" alt=""> admin</span>
        </div>
        <div id="yBodyBox" ref="yBodyBox">
            <LeftNav />
            <div id="yBody" ref="yBody">
                <router-view />
                <div class="y-body-footer">Copyright DAB</div>
            </div>
        </div>
        <Message />
    </div>
</template>

<script>
export default {
    name: "App",
    mounted: function() {
        this.$refs.yBodyBox.style.height =
            Number(document.documentElement.clientHeight) - 60 + "px";
    },
    methods: {}
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
</style>
