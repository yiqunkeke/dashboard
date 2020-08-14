<template>
  <div>
      <!-- {{power}} -->
      水表总用量：{{power.waterTotal}}
      电表总用量：{{power.powerTotal}}
      本月用水量：{{power.monthWater}}
      本月用电量：{{power.monthElectricity}}
      本月用气量：{{power.monthGas}}
  </div>
</template>

<script>
export default {
  props: {
    power: {
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