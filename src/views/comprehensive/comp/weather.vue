/**
 * 天气预报
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
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
@import '~@/assets/styles/box.scss';
  .box-wrapper {
      display: flex;
      justify-content: flex-start;
      padding: 40px;
      p {
        font-size: 12px;
        color: $white;
        margin-right: 25px;
        em {
          font-size: 60px;
          color: $white;
          font-family: Arial, Helvetica, sans-serif;
          font-style: normal;
        }
      }
    }
</style>
