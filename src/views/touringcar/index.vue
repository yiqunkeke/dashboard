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
          <el-table :data="equipments" stripe>
                <el-table-column
                    prop="roomName"
                    label="房间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="equipmentName"
                    label="设备"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="来源"
                    width="280">
                    <template slot-scope="scope">
                      客户端：{{scope.row.sourceOperation}}，
                      房车网关：{{scope.row.sourceGateway}}，
                      实体按键：{{scope.row.sourceUseKey}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="useTotalTime"
                    label="当日使用总时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="avgTime"
                    label="当日每次平均时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="useTotalFrequency"
                    label="当日使用次数">
                </el-table-column>
          </el-table>
        </div>

        <!-- 表格1 -->
        <div class="box">
          <h1>
            房车模式使用情况
          </h1>
          <el-table :data="modes" stripe>
                <el-table-column
                    prop="roomName"
                    label="房间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="modelName"
                    label="模式"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="来源"
                    width="280">
                    <template slot-scope="scope">
                      客户端：{{scope.row.sourceOperation}}，
                      房车网关：{{scope.row.sourceGateway}}，
                      实体按键：{{scope.row.sourceUseKey}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="useTotalTime"
                    label="使用时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="avgTime"
                    label="当日每次平均时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="useTotalFrequency"
                    label="当日使用次数">
                </el-table-column>
          </el-table>
        </div>

      </el-col>
  </el-row>
</template>

<script>
import { tcarEquipment, tcarMode } from '@/api/touringcar'
export default {
	data() {
		return {
      options: [{
          value: 'C0847DB6F000',
          label: '帝盛房车A'
        }],
        value: 'C0847DB6F000',
        equipments: [],
        modes: []
		}
  },
  watch: {
    equipments(val) {
      console.log('equipments',val)
      this.equipments = val
    },
    modes(val) {
      console.log('modes',val)
      this.modes = val
    }
  },
  mounted() {
    this.getEquipment()
    this.getMode()
  },
 	methods: {
     //根据房车-房间获取设备
     async getEquipment() {
       this.equipments = await tcarEquipment({
            carNum: 'C0847DB6F000'
          })
       setInterval(async () => { 
          this.equipments = await tcarEquipment({
            carNum: 'C0847DB6F000'
          })
        }, 2000)
     },
    //  获取模式
     async getMode() {
       this.modes = await tcarMode({
            carNum: 'C0847DB6F000'
       })
       setInterval(async () => { 
          this.modes = await tcarMode({
            carNum: 'C0847DB6F000'
          })
          console.log('modes', this.modes)
        }, 2000)
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
