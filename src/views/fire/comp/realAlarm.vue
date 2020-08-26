/**
 * 实时报警
 * 创建时间：2020-08-13
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        实时报警
      </h1>
      <ul class="list">
        <li v-for="(item, index) in alarm" :key="index">
          <span>{{index + 1}}</span>
          <span>{{item.alarmAddress}}</span>
          <span>{{item.alarmDesc}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    realAlarm: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      alarm: this.realAlarm
    }
  },
  watch: {
    realAlarm (val) {
      this.alarm = val
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/box.scss';
  .list {
      li {
        font-size: .14rem;
        color: $white;
        height: .4rem;
        line-height: .4rem;
        padding: 0 .3rem;
        display: flex;
        justify-content: space-between;
        &:nth-child(odd) {
          background: rgba($color: #0184ff, $alpha: 0.1);
        }
        span {
          text-align: left;
        }
      }
    }
</style>
