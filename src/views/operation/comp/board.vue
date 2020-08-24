<template>
  <div class="box">
      <!-- {{total}} {{totalPos}} -->
      <div class="box-wrapper">
        <div class="month total">
          <h2>{{totalPos.position}}</h2>
          <div class="line">
            <div class="inner">
              <span>{{totalPos.listOrders[0].desc}}</span>
              <p><em>{{totalPos.listOrders[0].value}}</em></p>
            </div>
            <div class="inner">
              <span>{{totalPos.listOrders[1].desc}}</span>
              <p><em>{{totalPos.listOrders[1].value}}</em></p>
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
        // margin-bottom: 30px;
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
    bottom: 20%;
    left: 30%;
    right: auto;
    top: auto;
  }
}
</style>
