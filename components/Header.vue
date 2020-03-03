<template>
  <div class="page-header">
    <el-row type="flex">
      <div class="page-header__avatar">
        <img :src="require('~/assets/logo.svg')" alt="" />
      </div>
      <el-col>
        <Container>
          <el-row type="flex" justify="end" align="middle">
            <el-col>
              <Statistics />
            </el-col>
            <Notification />
            <Avatar />
          </el-row>
        </Container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Notification from '~/components/Notification.vue'
import Container from '~/components/Container.vue'
import Avatar from '~/components/Avatar.vue'
import Statistics from '~/components/Statistics.vue'

export default {
  name: 'Header',
  components: {
    Notification,
    Container,
    Statistics,
    Avatar
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  border-bottom: 1px solid #ededed;
  opacity: 0.4;
  transition: opacity 300ms;
  &:hover {
    opacity: 1;
  }
  &__avatar {
    background: rgb(35, 93, 121);
    min-width: 149px;
    padding: 14px 0 15px;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
