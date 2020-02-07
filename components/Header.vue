<template>
  <Container class="page-header">
    <el-row type="flex" justify="space-between">
      <el-col :span="14">
        <el-input
          v-model="search"
          @keyup.enter.native="submit"
          placeholder="Поиск по системе"
          suffix-icon="el-icon-search"
        >
        </el-input>
      </el-col>
      <el-col :span="4">
        <Avatar title="Alexander C." user-role="Администратор" />
      </el-col>
    </el-row>
    <BreadCrumb />
  </Container>
</template>

<script>
import Container from '~/components/Container.vue'
import Avatar from '~/components/Avatar.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  name: 'Header',
  components: {
    Container,
    BreadCrumb,
    Avatar
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit() {
      const { search } = this
      this.$router.push({
        query: {
          search
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
