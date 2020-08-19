<template>
  <div class="box">
      <h1>
        火源高发处视频监控
      </h1>
      <!-- {{video}} -->
        <video width="320" height="240" controls v-for="(item, index) in video" :key="index">
          <source :src="item" type="video/mp4">
        您的浏览器不支持Video标签。
        </video>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Array,
      default: () => {
        return []
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
  }
</style>
