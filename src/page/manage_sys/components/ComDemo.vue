<template>
    <div>
        <title>组件</title>
        <div>
            <slot></slot>
        </div>
        <button v-on:click="$emit('enlarge-text', 3)">触发父级事件</button>
    </div>
</template>

<script>
export default {
    name: "ComDemo"
};
</script>
