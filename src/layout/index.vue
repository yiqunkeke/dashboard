<template>
    <div>
        <Header />
        <div class="main-wrapper">
            <Aside />
            <Main />
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
  position: absolute;
  top: $headerHeight;
  left: 0;
  right:0;
  bottom: 0;
  overflow: auto;
}
</style>
