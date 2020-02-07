<template>
  <el-form-item>
    <template slot="label">
      <span v-if="index > 0" class="or">или</span>
      {{ `Диапазон ${index + 1}` }}
    </template>
    <el-row class="age-component">
      <el-col :span="12">
        <el-form-item :required="true" label-width="50" label="от">
          <el-input v-model.number="value.from" type="number"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :required="true" label-width="50" label="до">
          <el-input v-model.number="value.to" type="number"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form-item>
</template>

<script>
export default {
  name: 'AgeComponent',
  props: {
    index: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        from: '',
        to: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.age-component {
  max-width: 300px;
  .el-form-item {
    margin-right: 10px;
    display: flex;
  }
}
.or {
  display: inline-block;
  background: rgba(0, 0, 0, 0.1);
  line-height: normal;
  padding: 5px 5px 8px;
  margin-right: 10px;
  border-radius: 3px;
}
</style>
