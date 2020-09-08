/**
 * 当日营收额
 * 创建时间：2020-09-08
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        <span>当日营收额</span>
      </h1>
      <div class="box-wrapper">
        <div class="inner">
          <p>276.78</p>
          <span>万元</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    electric: {
      type: Object,
      default: () => {
        return {}
      }
    },
    water: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      ele: this.electric,
      wat: this.water
    }
  },
  watch: {
    electric (val) {
      this.ele = val
    },
    water (val) {
      this.wat = val
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
        // flex-direction: column;
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
