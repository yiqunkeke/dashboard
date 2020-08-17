<template>
  <div>
      <!-- {{statistic}} -->
      报警总数：{{statistic.alarmTotal}}
      到场用时：{{statistic.arriveTimeTotal}}
      火灾数：{{statistic.fireHazardNum}}
      火警隐患：{{statistic.fireNum}}
      设备完好率：{{statistic.equipmentGoodRate}}

      <br/>
      位置：{{posEquip.position}}
      内部设施：{{posEquip.innerEquipNum}}
      环境情况：{{posEquip.environmentalConditions}}
  </div>
</template>

<script>
export default {
  props: {
    statistic: {
      type: Object,
      default: () => {
        return {}
      }
    },
    posEquip: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
