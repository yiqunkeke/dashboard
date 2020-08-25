import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
import './assets/styles/global.css' // 全局
import './assets/styles/iconfont.css' // 字体图标
import './router/permission'

// https://vuescrolljs.yvescoding.org/zh/
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'percent', // number/percent
      detectResize: true
    },
    scrollPanel: {
      // initialScrollY: 0
    },
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '0px',
      keepShow: true
    },
    bar: {
      // hoverStyle: true,
      // onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
      // background: 'red',
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 0.3,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
