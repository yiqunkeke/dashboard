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
        <el-table :data="analy" stripe>
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
@import '~@/assets/styles/box.scss';
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgba($color: #0184ff, $alpha: 0.1);
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td {
  background: rgba($color: #0184ff, $alpha: 0.2);
}
::v-deep .el-table {
      background-color: transparent;
      color: #fff;
      thead {
        color: $white;
      }
      th, tr {
        background-color: transparent;
      }
      td, th.is-leaf {
        border-bottom: none;
      }
    }
    .el-table::before {
        height: 0;
    }
</style>
