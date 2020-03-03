<template>
  <Container>
    <div class="community">
      <el-radio-group v-model="tab" class="community__active-page">
        <el-radio-button label="post_lent">Лента постов</el-radio-button>
        <el-radio-button label="my_groups">Мои группы</el-radio-button>
        <el-radio-button label="help_requests"
          >Запросы о помощи</el-radio-button
        >
      </el-radio-group>
      <groups />
    </div>
  </Container>
</template>

<script>
import Groups from '~/components/community/Groups'
import Container from '~/components/Container'
export default {
  name: 'Community',
  components: { Groups, Container },
  layout: 'admin',
  data() {
    return {
      tab: 'my_groups'
    }
  }
}
</script>

<style lang="scss">
.community {
  max-width: 931px;
  &__active-page {
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    & .el-radio-button {
      flex-grow: 1;
    }
    & .el-radio-button__inner {
      width: 100%;
    }
  }
}
</style>
