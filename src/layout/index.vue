<template>
    <div>
        <Header />
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
  top: $headerHeight;
  left: 0;
  right:0;
  bottom: 0;
  // bottom: 110px;

  background: #01011b;
  // background-image: radial-gradient(circle, #014ba0, #01011b);
  padding-bottom: 1.1rem;
  overflow: none;
  ::v-deep .__view {
    display: flex;
    height: 100%;
    overflow: hidden;
  }
}
</style>
