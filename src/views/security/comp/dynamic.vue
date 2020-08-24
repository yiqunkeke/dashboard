
<template>
  <div class="box">
      <h1>
        动态
      </h1>
      <!-- {{dynamic}} -->
      <!-- <ul>
          <li v-for="(item, index) in dynamic" :key="index">
              {{item.message}}-----{{item.date}} -----{{item.dateInfo}}
          </li>
      </ul> -->
      <el-table :data="dynamic" stripe>
                <el-table-column
                    prop="date"
                    label="日期"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="message"
                    label="详情">
                </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  props: {
    dynamic: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      dyn: this.dynamic
    }
  },
  watch: {
    dynamic (val) {
      this.dyn = val
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
