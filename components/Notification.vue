<template>
  <el-badge class="notification" is-dot>
    <font-awesome-icon :icon="['far', 'bell']" size="2x" />
  </el-badge>
</template>

<script>
export default {
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
.notification {
  margin-right: 20px;
}
</style>
