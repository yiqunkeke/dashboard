/**
 * 天气预报
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        <i class="iconfont icon--"></i>
        <span>天气预报</span>
      </h1>
      <div class="box-wrapper">
        <p>
        温度：<em>{{wea.temperature}}</em>℃
        </p>
        <p>
        湿度：<em>{{wea.humidity}}</em>%
        </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      wea: this.weather
    }
  },
  watch: {
    weather (val) {
      this.wea = val
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
        color: $light;
        font-size: 20px;
      }
    }
    .box-wrapper {
      display: flex;
      justify-content: flex-start;
      padding-left: 30px;
      padding-right: 30px;
      p {
        font-size: 12px;
        color: $gray-9;
        margin-right: 25px;
        em {
          font-size: 20px;
          color: $gray-3;
          font-family: Arial, Helvetica, sans-serif;
          font-style: normal;
        }
      }
    }
  }
</style>
