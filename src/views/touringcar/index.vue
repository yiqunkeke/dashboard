<template>
  <el-row :gutter="20">
      <el-col :span="24">
        <el-select v-model="value" placeholder="请选择" size="small" class="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <!-- 表格1 -->
        <div class="box">
          <h1>
            房车设备使用情况
          </h1>
          <el-table :data="tableData" stripe>
                <el-table-column
                    prop="room"
                    label="房间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="equipmentName"
                    label="设备"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="resource"
                    label="来源"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="dayTotalTime"
                    label="当日使用总时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayAvarageTime"
                    label="当日每次平均时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayCounts"
                    label="当日使用次数">
                </el-table-column>
          </el-table>
        </div>

        <!-- 表格1 -->
        <div class="box">
          <h1>
            房车模式使用情况
          </h1>
          <el-table :data="tableData2" stripe>
                <el-table-column
                    prop="room"
                    label="房间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="modeName"
                    label="模式"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="resource"
                    label="来源"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="dayTotalTime"
                    label="使用时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayAvarageTime"
                    label="当日每次平均时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayCounts"
                    label="当日使用次数">
                </el-table-column>
          </el-table>
        </div>

      </el-col>
  </el-row>
</template>

<script>
import { operationList } from '@/api/operation'
export default {
	data() {
		return {
      options: [{
          value: '选项1',
          label: '荣成拖挂房车A'
        }, {
          value: '选项2',
          label: '荣成拖挂房车B'
        }, {
          value: '选项3',
          label: '荣成自行房车A'
        }],
        value: '选项1',
        tableData: [
          {
            room:'儿童房',
            equipmentName: '顶灯',
            resource: '小程序：0，实体按键1，房车网关：2',
            dayTotalTime: '10:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '20'
          },
          {
            room:'客厅',
            equipmentName: '筒灯',
            resource: '小程序：8，实体按键15，房车网关：2',
            dayTotalTime: '8:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '25'
          },
          {
            room:'主卧',
            equipmentName: '灯带',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '9'
          },
          {
            room:'主卧',
            equipmentName: '气氛灯',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '9'
          },
          {
            room:'卫生间',
            equipmentName: '顶灯',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '9'
          },
          {
            room:'客厅',
            equipmentName: '顶灯',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '9'
          }
        ],
        tableData2: [
          {
            room:'儿童房',
            modeName: '温馨',
            resource: '小程序：0，实体按键1，房车网关：2',
            dayTotalTime: '10:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '20'
          },
          {
            room:'客厅',
            modeName: '起夜',
            resource: '小程序：8，实体按键15，房车网关：2',
            dayTotalTime: '8:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '10'
          },
          {
            room:'主卧',
            modeName: '观影',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '8'
          },
          {
            room:'客厅',
            modeName: '明亮',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '10'
          },
          {
            room:'客厅',
            modeName: '晨起',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '8:00:00',
            dayCounts: '3'
          },
        ],
        list: []
		}
  },
  watch: {
    list(val) {
      // console.log('watch', val)
      console.log(val)
    }
  },
  mounted() {
    this.getData()
  },
 	methods: {
     //根据房车-房间获取设备、模式
     getData() {
       setInterval(async () => { 
          this.list = await operationList()
          // console.log('list', this.list)
        }, 10000)
     }
	  }
}
</script>

<style lang="scss" scoped>
.el-row {
  display: flex;
  width: 100%;
  .el-col{
    display: flex;
    flex-direction: column;
  }
}
</style>

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

.select {
  width: 3rem;
  margin-bottom: .15rem;
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
        padding-top: .05rem;
        padding-bottom: .05rem;
        font-size: 0.14rem;
      }
    }
</style>
