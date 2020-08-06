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
    data() {
        return {
            visible: this.dialogVisible
        }
    },
    watch: {
        dialogVisible(val) {
            this.visible = val
        }
    },
    methods: {
        handleCancel() {
            this.$emit('cancel')
        },
        handleConfirm() {
            this.$emit('confirm')
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
    border-radius: 5px;
    .el-dialog__header {
    padding: 10px 15px;
    background: #f5f5f5;
    box-shadow: 0 1px 1px rgba(0,0,0,.16);
    border-radius: 5px 5px 0 0;
    .el-dialog__title {
        font-size: 16px;
        color: #333;
    }
    .el-dialog__headerbtn {
        top: 15px;
        right: 15px;
    }
    .el-dialog__body {
        padding: 15px;
    }
}
}
</style>