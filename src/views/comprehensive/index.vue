<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <weather />
      </el-col>
      <el-col :span="18">

      </el-col>
    </el-row>
  </div>
</template>

<script>
import weather from './weather'
export default {
  components: {
    weather
  }
}
</script>

<style>

</style>
