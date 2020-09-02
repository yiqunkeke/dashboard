<template>
    <el-aside width="150">
      <div class="left">
        <img src="../../assets/images/left.png" />
      </div>
      <el-menu
          class="menu"
          mode="horizontal"
          :default-active="this.$route.path"
          text-color="#00fcf9"
          active-text-color="#fed53c"
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
      <div class="right">
        <img src="../../assets/images/right.png" />
      </div>
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
    // background: #2d3037;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .menu {
      display: flex;
      flex: 1;
      width: 100%;
      // height: 1.06rem;
      border-right: none;
      justify-content: space-between;
      ::v-deep>div {
        width: 18%;
      }
    }
    ::v-deep .el-menu.el-menu--horizontal {
      border: none;
      background-image: linear-gradient(to right, #01011b, #021b60, #01011b);
      background-color: transparent !important;
      border-top: .02rem solid #00379e;
      .el-menu-item {
        background-color: transparent !important;
        border-bottom-color: transparent !important;
        background: url('../../assets/images/default.png') no-repeat center;
        background-size: contain;
      }
      .el-menu-item.is-active {
        background: url('../../assets/images/active.png') no-repeat center;
        // background-size: 100% 100%;
        background-size: contain;
      }
      .el-submenu__title:hover, .el-menu-item:hover {
        color: #fed53c !important;
      }
    }
    .left {
      background: #01011b;
      display: flex;
      align-items: flex-start;
      // background-image: linear-gradient(to right, #07072e, #01011b);
    }
    .right {
      background: #01011b;
      display: flex;
      align-items: flex-start;
      // background-image: linear-gradient(to left, #07072e, #01011b);
    }
  }
</style>
