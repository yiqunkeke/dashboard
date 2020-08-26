/**
 * 全国电力监控
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        <span>全国电/水力监控</span>
      </h1>
      <div class="box-wrapper">
        <div class="inner">
          <p>{{ele.todayElectricity}}</p>
          <span>今日用电（度）</span>
        </div>
        <div class="inner">
          <p>{{ele.monthElectricity}}</p>
          <span>本月用电</span>
        </div>
        <div class="inner">
          <p>{{ele.yearElectricity}}</p>
          <span>年度用电</span>
        </div>
      </div>
      <div class="box-wrapper">
        <div class="inner">
          <p>{{wat.todayWater}}</p>
          <span>今日用水（吨）</span>
        </div>
        <div class="inner">
          <p>{{wat.monthWater}}</p>
          <span>本月用水</span>
        </div>
        <div class="inner">
          <p>{{wat.yearWater}}</p>
          <span>年度用水</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    electric: {
      type: Object,
      default: () => {
        return {}
      }
    },
    water: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      ele: this.electric,
      wat: this.water
    }
  },
  watch: {
    electric (val) {
      this.ele = val
    },
    water (val) {
      this.wat = val
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/box.scss';
  .box-wrapper {
      display: flex;
      justify-content: space-between;
      margin: .1rem .2rem .1rem;
      .inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        p {
          font-size: .28rem;
          color: $yellow;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        span {
          color: $white;
          font-size: .12rem;
          margin-top: .04rem;
          display: block;
        }
      }
    }
</style>
