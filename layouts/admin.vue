<template>
  <el-container class="admin-layout">
    <el-aside width="150px">
      <SideBar />
    </el-aside>
    <el-container>
      <el-header height="auto">
        <Header />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideBar from '~/components/SideBar/SideBar.vue'
import Header from '~/components/Header.vue'

export default {
  name: 'Admin',
  components: {
    SideBar,
    Header
  },
  middleware: ['breadcrumb']
}
</script>

<style lang="scss">
.admin-layout {
  min-height: 100vh;
  .el-aside {
    padding: 5px;
    border-right: 1px solid #eeeeee;
  }
}
</style>
