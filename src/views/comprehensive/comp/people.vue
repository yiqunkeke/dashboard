/**
* 人员数与设备数
* 创建人： 李静科 20017906
* 创建时间： 2020-08-12
 */
<template>
  <div class="box-wrapper">
      <div class="inner">
        <span>进入园区人数</span>
        <p>{{peo.enterParkPeople}}</p>
      </div>
      <div class="inner">
        <span>今日登记人数</span>
        <p>{{peo.todayRegisterPeople}}</p>
      </div>
      <div class="inner">
        <span>离开园区人数</span>
        <p>{{peo.leaveParkPeople}}</p>
      </div>
      <div class="inner">
        <span>房车数</span>
        <p>{{equip.touringcarNum}}</p>
      </div>
      <div class="inner">
        <span>空车位</span>
        <p>{{equip.emptyParking}}</p>
      </div>
      <div class="inner">
        <span>监控楼数</span>
        <p>{{equip.monitoringBuildNum}}</p>
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
.box-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    border-radius: 3px;
    margin-bottom: 10px;
    margin-right: 10px;
    min-width: 83px;
    // &:nth-child(3n) {
    //   margin-right: 0;
    // }
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
      margin-bottom: 8px;
      display: block;
    }
  }
}
</style>
