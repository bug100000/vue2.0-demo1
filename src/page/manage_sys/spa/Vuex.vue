<template>
    <div class="hello pulic-page-class">
        <div class="y-body-title">
            <img class="breadcrumb-left-verticalPole" src="../../../assets/img/indexIcon.png" alt="">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/vuex' }">Vuex</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="y-body-body" ref="yBodyBody">
            <div class="hello">
                {{count}}
            </div>
            <div>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Vuex",
    data() {
        return {};
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    mounted: function() {
        // store.commit("increment");
    },
    methods: {
        increment() {
            this.$store.commit("increment");
        },
        decrement() {
            this.$store.commit("decrement");
        }
    }
};
</script>
