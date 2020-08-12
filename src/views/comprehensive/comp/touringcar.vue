/**
 * 拖挂房车客房统计
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        拖挂房车客房统计
      </h1>
      <div class="box-wrapper">
        <div class="inner">
          <span>总拖挂房车数</span>
          <p>{{touringcar.roomTotal}}</p>
        </div>
        <div class="inner">
          <span>已入住</span>
          <p>{{touringcar.checkedIn}}</p>
        </div>
        <div class="inner">
          <span>入住占比</span>
          <p>{{touringcar.ratio}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    touringcar: {
      type: Object,
      default: () => {
        return {}
      }
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
    .box-wrapper {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
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
          margin-bottom: 8px;
          margin-top: 8px;
          display: block;
        }
      }
    }
  }
</style>
