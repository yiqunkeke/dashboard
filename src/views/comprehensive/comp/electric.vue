/**
 * 全国电力监控
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        <i class="iconfont icon-shandian"></i>
        <span>全国电力监控</span>
      </h1>
      <div class="box-wrapper">
        <div class="inner">
          <p>{{ele.todayElectricity}}</p>
          <span>今日用电</span>
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
    }
  },
  data () {
    return {
      ele: this.electric
    }
  },
  watch: {
    electric(val) {
      this.ele = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 10px;
    h1 {
      color: $gray-3;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      align-items: center;
      padding:10px;
      i {
        color: $yellow;
        font-size: 22px;
      }
    }
    .box-wrapper {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      .inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px 20px;
        p {
          font-size: 20px;
          color: $gray-3;
          margin: 0;
          // font-weight: bold;
          font-family: Arial, Helvetica, sans-serif;
        }
        span {
          color: $gray-9;
          font-size: 12px;
          margin-top: 8px;
          display: block;
        }
      }
    }
  }
</style>
