<template>
  <div class="box">
      <!-- <h1>
        报修订单列表
      </h1> -->
      <div class="box-wrapper">
          <!-- {{listData}} -->
        <el-table :data="listData" stripe tooltip-effect="light">
                <el-table-column
                    prop="equipmentCode"
                    label="编号"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="orderType"
                    width="70"
                    label="工单类型">
                </el-table-column>
                <el-table-column
                    prop="equipmentName"
                    show-overflow-tooltip
                    label="内容">
                </el-table-column>
                <el-table-column
                    prop="repairman"
                    label="提报人"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="currentState"
                    label="当前状态"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="repairTime"
                    label="响应时间"
                    show-overflow-tooltip
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="maintenanceMan"
                    label="处理人"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="faultLevel"
                    label="等级"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="duration"
                    label="持续时间"
                    width="90">
                </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => {
        return []
      }
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
        background-image:linear-gradient(to right, #283999, #0a296c);
        border-radius: .1rem .1rem 0 0;
      }
      th, tr {
        background-color: transparent;
      }
      td, th.is-leaf {
        border-bottom: none;
      }
      td, th {
        padding-top: .05rem;
        padding-bottom: .05rem;
        font-size: .12rem;
      }
    }
    .el-table::before {
        height: 0;
    }
</style>
