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
                    label="设备编号"
                    width="90">
                </el-table-column>
                <el-table-column
                    prop="equipmentName"
                    show-overflow-tooltip
                    label="设备名称">
                </el-table-column>
                <el-table-column
                    prop="repairman"
                    label="报修人"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="currentState"
                    label="当前状态"
                    width="90">
                </el-table-column>
                <el-table-column
                    prop="repairTime"
                    label="报修时间"
                    show-overflow-tooltip
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="maintenanceMan"
                    label="维修员"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="faultLevel"
                    label="故障等级"
                    width="90">
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
        border-radius: 10px 10px 0 0;
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
