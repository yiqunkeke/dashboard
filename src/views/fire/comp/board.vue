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
  // min-height: 419px;
  min-height: 382px;
  border-radius: 10px;
  position: relative;
  .line {
    display: flex;
    padding-left: 33px;
    padding-top: 30px;
    justify-content: space-between;
    padding-right: 33px;
    .block {
      background: url('../../../assets/images/boardItemBg.png') no-repeat;
      background-size: contain;
      width: 124px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      // margin-right: 36px;
      span {
        color: $white;
        font-size: 12px;
        width: 55px;
        text-align: center;
        display: block;
      }
      em {
        color: #00fcf9;
        font-size: 20px;
      }
    }
  }
}

</style>
