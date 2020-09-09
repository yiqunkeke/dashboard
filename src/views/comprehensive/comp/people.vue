/**
* 人员数与设备数
* 创建人： 李静科 20017906
* 创建时间： 2020-08-12
 */
<template>
  <div class="box">
      <h1>
        <span>人员数与设备数</span>
      </h1>
      <div class="box-wrapper">
          <div class="inner">
            <p>{{peo.enterParkPeople}}</p>
            <span>今日入园人数</span>
          </div>
          <div class="inner">
            <p>{{peo.nowPeople}}</p>
            <span>当前在园人数</span>
          </div>
          <div class="inner">
            <p>{{peo.peopleTotal}}</p>
            <span>累计入园人数</span>
          </div>
      </div>
      <div class="box-wrapper">
          <div class="inner">
            <p>{{equip.touringcarNum}}</p>
            <span>空余水电桩</span>
          </div>
          <div class="inner">
            <p>{{equip.emptyParking}}</p>
            <span>空余充电桩</span>
          </div>
          <div class="inner">
            <p>{{equip.monitoringBuildNum}}</p>
            <span>空余停车位</span>
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
    equipment: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      peo: this.people,
      equip: this.equipment
    }
  },
  watch: {
    people (val) {
      this.peo = val
    },
    equipment (val) {
      this.equip = val
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
      height: 50%;
      .inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
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
