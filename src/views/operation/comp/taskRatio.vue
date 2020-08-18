<template>
  <div class="box">
      <h1>
        任务完成率
      </h1>
      <div class="box-wrapper">
          {{taskData}}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        taskData: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  .box {
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    border-radius: 3px;
    margin-bottom: 10px;
    h1 {
      color: #333;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      align-items: center;
      padding: 15px 20px;
      margin: 0;
      border-bottom: 1px solid #eee;
    }
    .box-wrapper {
        padding:10px;
        .el-pagination {
          margin-top: 10px;
        }
    }
  }
</style>