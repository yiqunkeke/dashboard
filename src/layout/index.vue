<template>
    <div>
        <!-- <Header /> -->
        <div class="main-wrapper">
            <Main />
            <Aside />
        </div>
    </div>
</template>

<script>
import Header from './header'
import Aside from './aside'
import Main from './main'
export default {
  components: {
    Header,
    Aside,
    Main
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  // top: $headerHeight;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  overflow: auto;

  background: #f1f3f5;
  padding-bottom: 50px;
}
</style>
