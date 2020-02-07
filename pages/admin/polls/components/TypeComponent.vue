<template>
  <el-form-item :label="`Тип ${index + 1}`">
    <el-row>
      <el-col :span="12">
        <el-form-item :required="true">
          <el-select v-model="value">
            <el-option label="Gold" value="gold"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form-item>
</template>

<script>
export default {
  name: 'TypeComponent',
  props: {
    index: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      default: () => 'gold'
    }
  }
}
</script>

<style scoped></style>
