<template>
  <div>
    <div class="polls-top">
      <nuxt-link to="/admin/polls/create?tab=parameter">Параметры</nuxt-link>
      <nuxt-link to="/admin/polls/create?tab=question">Вопросы</nuxt-link>
      <nuxt-link to="/admin/polls/create?tab=logic">Логика</nuxt-link>
      <nuxt-link to="/admin/polls/create?tab=condition">Условия</nuxt-link>
      <nuxt-link to="/admin/polls/create?tab=respondents"
        >Респонденты</nuxt-link
      >
    </div>
    <client-only>
      <NuxtChild />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Polls',
  layout: 'admin',
  meta: {
    breadcrumb: 'Опросы'
  }
}
</script>

<style lang="scss" scoped>
.polls-top {
  display: flex;
  justify-content: space-between;
  & > a {
    display: inline-block;
    color: #04721a;
    padding: 5px 10px 10px;
    border-bottom: 3px solid transparent;
    &.nuxt-link-exact-active {
      font-weight: bold;
      color: #000;
      border-bottom-color: #c1e837;
    }
  }
}
</style>
