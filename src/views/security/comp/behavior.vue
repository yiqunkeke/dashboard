/**
 * 行为统计
 * 创建时间：2020-08-17
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        行为统计
      </h1>
      <!-- {{behavior}} -->
      <el-table :data="behave" stripe>
          <el-table-column
              prop="area"
              label="区域"
              width="90">
          </el-table-column>
          <el-table-column
              prop="behavior"
              label="行为"
              width="110">
          </el-table-column>
          <el-table-column
              prop="time"
              label="时间">
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  props: {
    behavior: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      behave: this.behavior,
    }
  },
  watch: {
    behavior (val) {
      this.behave = val
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
      td, th {
        padding: .08rem;
        font-size: .12rem;
      }
    }
    .el-table::before {
        height: 0;
    }
</style>
