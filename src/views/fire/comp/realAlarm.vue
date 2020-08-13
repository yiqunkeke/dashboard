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
        <!-- {{alarm}} -->
        <li v-for="(item, index) in alarm" :key="index">
          {{item.alarmAddress}} -------- {{item.alarmDesc}}
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
  .box {
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    border-radius: 3px;
    margin-bottom: 10px;
    h1 {
      color: #333;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      align-items: center;
      padding: 15px 20px;
      margin: 0;
      border-bottom: 1px solid #eee;
    }
    .list {
      padding: 10px 20px;
      li {
        font-size: 12px;
        color: $gray-3;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
