<template>
  <!-- <div>
      中间
      {{people}}
      {{camera}}
  </div> -->
  <div class="box">
      <!-- {{power}} -->
      <div class="box-wrapper">
        <div class="month total">
          <h2>园区入口</h2>
          <div class="line">
            <div class="inner">
              <span>进入园区人数</span>
              <p><em>{{people.enterParkPeople}}</em>人</p>
            </div>
            <div class="inner">
              <span>离开园区人数</span>
              <p><em>{{people.leaveParkPeople}}</em>人</p>
            </div>
            <div class="inner mgb0">
              <span>今日累计人流量</span>
              <p><em>{{people.todayPeople}}</em>人</p>
            </div>
            <div class="inner mgb0">
              <span>本周累计人流量</span>
              <p><em>{{people.weekPeople}}</em>人</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Object,
      default: () => {
        return {}
      }
    },
    camera: {
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
  // min-height: 419px;
  min-height: 382px;
  border-radius: 10px;
  position: relative;
  .month {
    position: absolute;
    top: 10%;
    right: 6%;
    background: rgba($color: #001d7a, $alpha: 0.6);
    border-radius: 10px;
    padding: 17px;
    color: $white;
    h2 {
      font-size: 16px;
      margin-bottom: 25px;
    }
    .line {
      display: flex;
      width: 290px;
      flex-wrap: wrap;
      .inner {
        margin-right: 40px;
        margin-bottom: 30px;
        span {
          font-size: 14px;
          color: #a8b1c9;
          margin-bottom: 13px;
          display: block;
        }
        p {
          color: $white;
          em {
            color: $orange;
            font-size: 24px;
            font-weight: bold;
            margin-right: 6px;
          }
        }
      }
      .mgb0 {
        margin-bottom: 0;
      }
    }
  }
  .total {
    bottom:10%;
    left: 15%;
    right: auto;
    top: auto;
  }
}
</style>
