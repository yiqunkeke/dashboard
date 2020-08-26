<template>
  <div class="box">
      <!-- {{power}} -->
      <div class="box-wrapper">
        <div class="month">
          <h2>抄表系统</h2>
          <div class="line">
            <div class="inner">
              <span>本月用水量</span>
              <p><em>{{power.monthWater}}</em>吨</p>
            </div>
            <div class="inner">
              <span>本月用电量</span>
              <p><em>{{power.monthElectricity}}</em>度</p>
            </div>
            <div class="inner">
              <span>本月用气量</span>
              <p><em>{{power.monthGas}}</em>升</p>
            </div>
          </div>
        </div>
        <div class="month total">
          <h2>抄表系统</h2>
          <div class="line">
            <div class="inner">
              <span>水表总用量</span>
              <p><em>{{power.waterTotal}}</em>吨</p>
            </div>
            <div class="inner">
              <span>电表总用量</span>
              <p><em>{{power.powerTotal}}</em>度</p>
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
@import '~@/assets/styles/box.scss';
  .box-wrapper {
  background: url('../../../assets/images/map.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  // min-height: 419px;
  // min-height: 382px;
  border-radius: .1rem;
  position: relative;
  .month {
    position: absolute;
    top: 10%;
    right: 6%;
    background: rgba($color: #001d7a, $alpha: 0.6);
    border-radius: .1rem;
    padding: .17rem;
    color: $white;
    h2 {
      font-size: .16rem;
      margin-bottom: .25rem;
    }
    .line {
      display: flex;
      .inner {
        margin-right: .40rem;
        span {
          font-size: .14rem;
          color: #a8b1c9;
          margin-bottom: .13rem;
          display: block;
        }
        p {
          color: $white;
          font-size: .14rem;
          em {
            color: $orange;
            font-size: .24rem;
            font-weight: bold;
            margin-right: .06rem;
          }
        }
      }
    }
  }
  .total {
    bottom:10%;
    left: 6%;
    right: auto;
    top: auto;
  }
}
</style>
