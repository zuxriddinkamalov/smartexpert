<template>
  <div class="admin-layout">
    <el-container>
      <el-header height="auto">
        <Header />
      </el-header>
    </el-container>
    <el-container>
      <el-aside style="padding: 0" width="150px">
        <SideBar />
      </el-aside>
      <el-main style="padding: 0">
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import SideBar from '~/components/SideBar/SideBar.vue'
import Header from '~/components/Header.vue'

export default {
  name: 'Admin',
  components: {
    SideBar,
    Header
  }
}
</script>

<style lang="scss">
.admin-layout {
  min-height: 100vh;
  .el-aside {
    padding: 5px;
    border-right: 1px solid #eeeeee;
  }
  .el-header {
    padding: 0;
  }
}
</style>
