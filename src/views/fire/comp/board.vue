<template>
  <div class="box">
      <div class="box-wrapper">
      <!-- {{statistic}} -->
      <!-- 报警总数：{{statistic.alarmTotal}}
      到场用时：{{statistic.arriveTimeTotal}}
      火灾数：{{statistic.fireHazardNum}}
      火警隐患：{{statistic.fireNum}}
      设备完好率：{{statistic.equipmentGoodRate}} -->

      <div class="line">
        <div class="block">
          <span>报警<br/>总数</span>
          <em>{{statistic.alarmTotal}}</em>
        </div>
        <div class="block">
          <span>到场<br/>用时</span>
          <em>{{statistic.arriveTimeTotal}}</em>
        </div>
        <div class="block">
          <span>火灾<br/>数</span>
          <em>{{statistic.fireHazardNum}}</em>
        </div>
        <div class="block">
          <span>火警<br/>隐患</span>
          <em>{{statistic.fireNum}}</em>
        </div>
        <div class="block">
          <span>设备<br/>完好</span>
          <em>{{statistic.equipmentGoodRate}}</em>
        </div>
      </div>

      <!-- <br/>
      位置：{{posEquip.position}}
      内部设施：{{posEquip.innerEquipNum}}
      环境情况：{{posEquip.environmentalConditions}} -->
      </div>
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

<style lang="scss" scoped>
@import '~@/assets/styles/box.scss';
.box-wrapper {
  background: url('../../../assets/images/map.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: .1rem;
  position: relative;
  .line {
    display: flex;
    padding-left: .33rem;
    padding-top: .3rem;
    justify-content: space-between;
    padding-right: .33rem;
    .block {
      background: url('../../../assets/images/boardItemBg.png') no-repeat;
      background-size: contain;
      width: 1.24rem;
      height: .46rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        color: $white;
        font-size: .12rem;
        width: .55rem;
        text-align: center;
        display: block;
      }
      em {
        color: #00fcf9;
        font-size: .20rem;
      }
    }
  }
}

</style>
