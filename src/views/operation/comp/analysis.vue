/**
 * 设备报修情况分析
 * 创建时间：2020-08-14
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        设备报修情况分析
      </h1>
      <div class="box-wrapper">
        <el-table :data="analy">
                <el-table-column
                    prop="rank"
                    label="排名"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="equipmentName"
                    label="设备">
                </el-table-column>
                <el-table-column
                    prop="repairNum"
                    label="次数"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="increase"
                    label="涨幅"
                    width="80"
                    sortable>
                </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    analysis: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      analy: this.analysis,
      pageNum: 1,
      pageSize: 5,
      total: 2
    }
  },
  watch: {
    analysis (val) {
      this.analy = val
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
