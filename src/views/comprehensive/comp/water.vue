/**
 * 全国水力监控
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        <i class="iconfont icon-fenzu"></i>
        <span>全国水力监控</span>
      </h1>
      <div class="box-wrapper">
        <div class="inner">
          <p>{{wat.todayWater}}</p>
          <span>今日用水</span>
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
    water: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      wat: this.water
    }
  },
  watch: {
    water(val) {
      this.wat = val
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
      padding-left: 10px;
      padding-right: 10px;
      i {
        color: $main;
        font-size: 21px;
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
