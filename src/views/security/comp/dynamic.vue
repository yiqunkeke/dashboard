
<template>
  <div class="box">
      <h1>
        动态
      </h1>
      <!-- {{dynamic}} -->
      <ul>
          <li v-for="(item, index) in dynamic" :key="index">
              {{item.message}}-----{{item.date}} -----{{item.dateInfo}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        dynamic: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            dyn: this.dynamic
        }
    },
    watch: {
        dynamic (val) {
            this.dyn = val
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