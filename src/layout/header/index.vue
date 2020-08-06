<template>
  <el-header>
    <el-row>
      <el-col :span="12" class="header-logo">
        <img src="../../assets/logo.png">
        <h1>
          <strong>智慧园区数据看板</strong>
          <em>smart park data display</em>
        </h1>
        <h2>{{systemName}}</h2>
      </el-col>
      <el-col :span="12" class="header-right">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="list">
            <el-dropdown-item command="updatePwd">
              <i class="iconfont icon-mima"></i>修改密码
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              <i class="iconfont icon-tuichu"></i>退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <dialogCom
      :dialogVisible="dialogVisible"
      @cancel="handleCancel"
      @confirm="handleConfirm">
        <el-form :model="form" :rules="rules" label-width="100px" ref="form">
          <el-form-item prop="oldPwd" label="原密码">
            <el-input v-model="form.oldPwd" placeholder="请输入原密码" type="password" size="small">
            </el-input>
          </el-form-item>
          <el-form-item prop="newPwd" label="新密码">
            <el-input v-model="form.newPwd" placeholder="请输入新密码" type="password" size="small">
            </el-input>
          </el-form-item>
          <el-form-item prop="newPwdConfirm" label="确认新密码">
            <el-input v-model="form.newPwdConfirm" placeholder="请确认新密码" type="password" size="small">
            </el-input>
          </el-form-item>
        </el-form>
    </dialogCom>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
import dialogCom from '@/components/dialog'
import { updataPwd } from '@/api/user'
import md5 from 'js-md5'
export default {
  components: {
    dialogCom
  },
  computed: {
    ...mapGetters(['username', 'systemName'])
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        oldPwd: '',
        newPwd: '',
        newPwdConfirm: ''
      },
      rules: {
        oldPwd: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        newPwdConfirm: [
          { required: true, message: '请确认新密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleCommand (command) {
      // console.log(command)
      if (command === 'logout') {
        this.$store.dispatch('logout')
          .then(() => {
            this.$router.push({
              path: '/login'
            })
          })
      }
      if (command === 'updatePwd') {
        this.dialogVisible = true
      }
    },
    handleCancel () {
      this.dialogVisible = false
    },
    // 修改密码确认
    handleConfirm () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          if (this.form.newPwd !== this.form.newPwdConfirm) {
            this.$message.error('新密码两次输入不一致')
            return
          }
          const oldPwd = md5(this.form.oldPwd)
          const newPwd = md5(this.form.newPwd)
          await updataPwd(oldPwd, newPwd)
          this.$message({
            message: '修改密码成功，请重新登录',
            type: 'success'
          })
          this.dialogVisible = false
          this.$store.dispatch('logout')
          this.$router.push('/login')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
    h2 {
      color: $main;
      font-size: 14px;
      font-weight: normal;
      margin-left: 5px;
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
