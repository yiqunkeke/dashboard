<template>
  <el-header>
    <el-row>
      <el-col :span="8" class="header-logo">
        <div class="logo-wrapper">
          <img src="../../assets/logo.png">
        </div>
      </el-col>
      <el-col :span="8" class="slogan">
        智慧营地大数据看板
      </el-col>
      <el-col :span="8" class="header-right">
        <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}<br/>
          {{systemName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="list">
          <el-dropdown-item command="touringcar">
            <i class="iconfont icon-che"></i>房车
          </el-dropdown-item>
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
        <el-form :model="form" :rules="rules" label-width="1.2rem" ref="form">
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
      if(command === 'touringcar') {
        this.$router.push('/car')
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
  font-size: 0.12rem;
  display: flex;
  i {
    font-size: .18rem;
  }
}
// .el-dialog {
//   font-size: .12rem !important;
// }
.el-header {
  z-index: 999;
  width: 100%;
  padding:0;
  height: $headerHeight !important;
  background: #01011b;
  position: fixed;
  // background-image: radial-gradient(circle, #05112f 10%, #06266a 10%);
  .header-logo {
    background-image: linear-gradient(to right, #05112f, #06266a);
    border-bottom: .02rem solid #224cb3;
    height: .68rem;
    line-height: .68rem;
    .logo-wrapper {
      width: 1.87rem;
      img {
        width: 100%;
        height: auto;
        max-height: .68rem;
        display: block;
        margin-top: .09rem;
        margin-left: .2rem;
      }
    }
  }
  .slogan {
      background: url('../../assets/images/sloganBg.png') no-repeat;
      background-size: 100% 100%;
      color: #00fcff;
      font-size: 0.38rem;
      font-weight: bold;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
  }
  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: linear-gradient(to right, #072362, #05112f);
    border-bottom: .02rem solid #224cb3;
    height: .68rem;
    padding-right: .2rem;
    .el-dropdown-link {
      cursor: pointer;
      color: #fff;
      font-size: 0.14rem;
    }
    .el-icon-arrow-down {
      font-size: 0.14rem;
    }
  }
}
</style>
