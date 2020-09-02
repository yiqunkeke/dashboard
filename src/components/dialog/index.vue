<template>
  <el-dialog
      title="修改密码"
      :visible.sync="visible"
      width="30%"
      append-to-body
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @closed="handleCancel"
      >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel" size="mini">取 消</el-button>
        <el-button @click="handleConfirm" type="primary" size="mini">确 定</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.dialogVisible
    }
  },
  watch: {
    dialogVisible (val) {
      this.visible = val
    }
  },
  methods: {
    handleCancel () {
      this.$emit('cancel')
    },
    handleConfirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
    border-radius: .05rem;
    .el-dialog__header {
    padding: .1rem .15rem;
    background: #f5f5f5;
    box-shadow: 0 .01rem .01rem rgba(0,0,0,.16);
    border-radius: .05rem .05rem 0 0;
    .el-dialog__title {
        font-size: .16rem;
        color: #333;
    }
    .el-dialog__headerbtn {
        top: .15rem;
        right: .15rem;
    }
    .el-dialog__body {
        padding: .15rem;
    }
}
}
</style>
