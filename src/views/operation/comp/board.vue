<template>
  <div class="box">
      <!-- {{total}} {{totalPos}} -->
      <div class="box-wrapper">
        <div class="month total">
          <h2>{{totalPos.position}}</h2>
          <div class="line">
            <div class="inner" v-for="(item, index) in totalPos.listOrders" :key="index">
              <span>{{item.desc}}</span>
              <p><em>{{item.value}}</em></p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Array,
      default: () => {
        return []
      }
    },
    totalPos: {
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
  height: 100%;
  border-radius: .1rem;
  position: relative;
  .month {
    position: absolute;
    top: 10%;
    right: 6%;
    background: rgba($color: #001d7a, $alpha: 0.6);
    border-radius: .1rem;
    padding: .17rem;
    color: $white;
    h2 {
      font-size: .16rem;
      margin-bottom: .25rem;
    }
    .line {
      display: flex;
      width: 2.90rem;
      flex-wrap: wrap;
      .inner {
        margin-right: .4rem;
        span {
          font-size: .14rem;
          color: #a8b1c9;
          margin-bottom: .13rem;
          display: block;
        }
        p {
          color: $white;
          font-size: .14rem;
          em {
            color: $orange;
            font-size: .24rem;
            font-weight: bold;
            margin-right: .06rem;
          }
        }
      }
      .mgb0 {
        margin-bottom: 0;
      }
    }
  }
  .total {
    bottom: 20%;
    left: 30%;
    right: auto;
    top: auto;
  }
}
</style>
