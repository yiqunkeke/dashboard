/**
 * 天气预报
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <div class="box-wrapper">
        <p>
          <span>{{wea.type}}</span>
        </p>
        <p>
          <span>温度：</span><em>{{wea.low}}~{{wea.high}}</em>
        </p>
        <p>
        <span>湿度：</span><em>{{wea.humidity}}</em>
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
      justify-content: space-between;
      align-items: center;
      padding: .1rem .3rem;
      height: 100%;
      p {
        font-size:0.12rem;
        color: $white;
        margin-right: .25rem;
        display: flex;
        align-items: center;
        em {
          // font-size: .2rem;
          color: $white;
          font-family: Arial, Helvetica, sans-serif;
          font-style: normal;
        }
      }
    }
</style>
