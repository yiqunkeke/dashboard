<template>
  <div class="login-wrapper">
      <div class="login-pannel">

        <!-- 标题 -->
        <div class="login-title">
          <i class="iconfont icon-shuju"></i>
          <h1>
            SINDAR 智 慧 营 地
            <em>SINDAR SMART CAMP</em>
          </h1>
        </div>

        <!-- 表单 -->
        <el-form :model="form" class="login-form" :rules="rules" ref="form">
          <el-form-item prop="systemCode">
            <el-select v-model="form.systemCode" placeholder="请选择营地">
              <el-option
                :label="camp.systemName"
                :value="camp.systemCode"
                v-for="camp in camps"
                :key="camp.systemCode">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="userName">
            <el-input v-model="form.userName" placeholder="请输入您的用户名" type="text">
              <i slot="prefix" class="iconfont icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入您的密码" type="password">
              <i slot="prefix" class="iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button round @click="handleLogin('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import { campList } from '@/api/user'
export default {
  data () {
    return {
      form: {
        systemCode: '',
        userName: '',
        password: ''
      },
      rules: {
        systemCode: [
          { required: true, message: '请选择营地', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请输入您的用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' }
        ]
      },
      camps: []
    }
  },
  mounted () {
    this.getCampList()
  },
  methods: {
    // 获取营地列表
    async getCampList () {
      const res = await campList()
      console.log(res)
      this.camps = res
    },
    // 登录
    handleLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login', this.form)
            .then(() => {
              this.$router.push({
                path: '/compre'
              })
            })
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
.login-wrapper {
  background: url('../../assets/loginBg.jpg') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-pannel {
    width: 4rem;
    padding:.2rem;
    background: rgba(255,255,255,.1);
    border-radius: .3rem;
    .login-title {
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: .45rem;
        color: $light;
        text-shadow: .03rem .03rem .05rem #143c5b;
      }
      h1 {
        color: $light;
        font-size: .2rem;
        font-weight: normal;
        text-align: justify;
        text-shadow: .03rem .03rem .05rem #0e2a40;
        em {
          font-size: .12rem;
          font-style: normal;
          display: block;
          letter-spacing: .03rem;
        }
      }
    }
    .login-form {
      width: 95%;
      margin-top: .3rem;
      margin-left: auto;
      margin-right: auto;
      .el-select {
        width: 100%;
      }
      ::v-deep .el-input__prefix {
        left: .25rem;
        color: #fff;
      }
      ::v-deep .el-input__inner {
        padding-left: .6rem;
        background: rgba(255,255,255,.1);
        border-radius: .25rem;
        color: #fff;
        font-size: .13rem;
        border: none;
      }
      .el-button {
        width: 100%;
        margin-top: .1rem;
        background: transparent;
        border: .01rem solid $light;
        color: #fff;
      }
    }
  }
}
</style>
