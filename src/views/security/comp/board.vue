<template>
  <div>
      中间
      {{people}}
      {{camera}}
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Object,
      default: () => {
        return {}
      }
    },
    camera: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
