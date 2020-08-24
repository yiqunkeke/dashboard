<template>
  <div class="box">
      <h1>
        视频监控
      </h1>
      <!-- {{video}} -->
      <div class="video-wrapper">
        <video width="90" height="50" controls v-for="(item, index) in video" :key="index" class="video">
          <source :src="item" type="video/mp4">
        您的浏览器不支持Video标签。
        </video>
      </div>
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
@import '~@/assets/styles/box.scss';
.video-wrapper {
  display: flex;
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
  .video {
    margin-right: 15px;
    margin-bottom: 15px;
  }
}
</style>
