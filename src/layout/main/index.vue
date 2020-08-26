<template>
    <vue-scroll>
        <el-main>
            <router-view />
        </el-main>
    </vue-scroll>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.el-main {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}
</style>
