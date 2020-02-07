<template>
  <el-form-item :label="`Статус ${index + 1}`">
    <el-row>
      <el-col :span="12">
        <el-form-item :required="true" label-width="50">
          <el-select v-model="value">
            <el-option label="Активна" value="active"></el-option>
            <el-option label="Неактивна" value="inactive"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form-item>
</template>

<script>
export default {
  name: 'StatusComponent',
  props: {
    index: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      default: () => 'active'
    }
  }
}
</script>

<style scoped></style>
