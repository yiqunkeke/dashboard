<template>
  <div v-if="!item.hidden">
      <template v-if="item.children && item.children.length > 1">
        <el-submenu :index="item.path">
            <template slot="title">
                <i :class="iconClass(item.meta.icon)"></i>
                <span slot="title">{{item.meta.title}}</span>
            </template>
            <template>
                <div v-for="it in item.children" :key="`${item.path}/${it.path}`">
                    <el-menu-item :index="it.path" v-if="it.path!==''" @click="handleClick(item, it)">
                        <i :class="iconClass(it.meta.icon)"></i>{{it.meta.title}}
                    </el-menu-item>
                </div>
            </template>
        </el-submenu>
      </template>
      <template v-else>
          <el-menu-item :index="item.path" @click="handleClick(item)">
            <i :class="iconClass(item.meta.icon)"></i>
            <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass () {
      return function (iconName) {
        return `iconfont icon-${iconName}`
      }
    }
  },
  methods: {
    // 跳转
    handleClick (item, it) {
      if (it) {
        // console.log(`${item.path}/${it.path}`)
        this.$router.push({
          path: `${item.path}/${it.path}`
        })
      } else {
        // console.log(item.path)
        this.$router.push({
          path: item.path
        })
      }
    }
  }
}
</script>

<style lang="scss">
.el-submenu__title {
  padding-left: 16px !important;
  font-size: 13px !important;
  height: 50px !important;
  line-height: 50px !important;
  display: flex;
  align-items: center;
}
.iconfont {
    margin-right: 8px;
}
.el-submenu__title:hover, .el-menu-item:hover {
  color: #fff !important;
}
.el-menu-item {
  height: 50px !important;
  line-height: 50px !important;
  font-size: 13px !important;
  display: flex;
  justify-content: center;
}
</style>
