<template>
  <div class="box">
      <h1>
        <i></i>
        <span>总能耗</span>
      </h1>
      <div>
        {{total}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
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
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 10px;
    h1 {
      color: #333;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      i {
        display: block;
        width: 3px;
        height: 16px;
        background: #ccc;
        border-radius: 1px;
        margin-right: 8px;
      }
    }
  }
</style>
