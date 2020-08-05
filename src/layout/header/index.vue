<template>
  <el-header>
    <el-row>
      <el-col :span="12" class="header-logo">
        <img src="../../assets/logo.png">
        <h1>
          <strong>智慧园区数据看板</strong>
          <em>smart park data display</em>
        </h1>
      </el-col>
      <el-col :span="12" class="header-right">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="list">
            <el-dropdown-item command="updatePwd">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      if(command === 'logout') {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({
            path: '/login'
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list .el-dropdown-menu__item {
  font-size: 12px;
}
.el-header {
  z-index: 999;
  background: #fff;
  display: block;
  width: 100%;
  position: fixed;
  box-shadow: 0 1px 3px #dbdbdb;
  padding-left: 5px;
  .header-logo {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: auto;
      margin-right: 5px;
    }
    h1 {
      color: $main;
      font-size: 22px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: $headerHeight;
      justify-content: center;
      strong {
        font-size: 19px;
        font-weight: normal;
      }
      em {
        font-size: 12px;
        font-style: normal;
        display: block;
        font-weight: normal;
      }
    }
  }
  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: $headerHeight;
    line-height: $headerHeight;
    .el-dropdown-link {
      cursor: pointer;
      color: #333333;
      font-size: 12px;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
