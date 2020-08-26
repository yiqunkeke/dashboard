/**
 * 消防设备报警情况分析
 * 创建时间：2020-08-14
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        消防设备报警情况分析
      </h1>
      <div class="box-wrapper">
        <div class="total">
            <span>当日报警次数：{{analy.dayAlarmNum}}</span>
            <span>报警总次数： {{analy.totalAlarmNum}}</span>
        </div>
        <el-table :data="analy.listAlarmEquipment" stripe>
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
                    prop="alarmNum"
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
        <!-- <el-pagination
            background
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination> -->
      </div>
  </div>
</template>

<script>
export default {
  props: {
    analysis: {
      type: Object,
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
      this.pageNum = Number(val.pageNum)
      this.pageSize = Number(val.pageSize)
      this.total = Number(val.dataTotal)
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.$emit('currentChange', val)
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
.el-table::before {
  height: 0;
}
.box-wrapper {
    .total {
      color: #00fcf9;
      padding-top: .15rem;
      display: flex;
      justify-content: space-between;
      padding-left: .33rem;
      padding-right: .33rem;
      font-size: .14rem;
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
      td, th {
        padding: 0;
        font-size: 0.12rem;
      }
    }
    .el-pagination {
      margin-top: .1rem;
      margin-bottom: .1rem;
    }
    }
</style>
