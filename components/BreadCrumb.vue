<template>
  <div class="breadcrumb">
    <span>
      <font-awesome-icon :icon="['fas', 'home']" />
    </span>
    <span v-for="(item, index) in breadcrumb"
      ><nuxt-link :key="index" to="">{{ item.title }}</nuxt-link></span
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BreadCrumb',
  computed: {
    ...mapState(['breadcrumb'])
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-top: 10px;
  & a:hover {
    color: #9ac113;
  }
  & span:not(:last-child) {
    position: relative;
    margin-right: 20px;
    &:after {
      content: '\2192';
      position: absolute;
      right: -17px;
    }
  }
}
</style>
