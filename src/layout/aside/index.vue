<template>
    <el-aside width="150">
      <vue-scroll>
        <el-menu
          class="menu"
          :default-active="this.$route.path"
          background-color="#2d3037"
          text-color="#cccaca"
          active-text-color="#409eff"
          :collapse="isCollapse">

            <SidebarItem
                v-for="route in routers"
                :key="route.path"
                :item="route"
                :base-path="route.path"
            />

            <!-- 1级 -->
            <!-- <el-menu-item index="1">
              <i class="iconfont icon-tubiao"></i>
              <span slot="title">综合态势</span>
            </el-menu-item> -->
            <!-- 2级 -->
            <!-- <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-xiaofang"></i>
                <span slot="title">消防系统</span>
              </template>
              <el-menu-item index="2-1">选项3</el-menu-item>
              <el-menu-item index="2-2">选项4</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon-anfangguanli"></i>
                <span slot="title">安防系统</span>
              </template>
              <el-menu-item index="3-1">选项5</el-menu-item>
              <el-menu-item index="3-2">选项6</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-shezhi"></i>
                <span slot="title">运维管理</span>
              </template>
              <el-menu-item index="4-1">选项7</el-menu-item>
              <el-menu-item index="4-2">选项8</el-menu-item>
            </el-submenu> -->
        </el-menu>
      </vue-scroll>
    </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './item'
export default {
  components: {
    SidebarItem
  },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'routers'
    ])
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
    background: #2d3037;
    .menu {
      width: 150px;
      border-right: none;
      padding-top: 10px;
    }
  }
</style>
