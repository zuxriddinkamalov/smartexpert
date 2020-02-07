<template>
  <nuxt-link :to="path" :class="['menu-item', { active: isActive }]">
    <div class="menu-item__icon">
      <font-awesome-icon :icon="icon" size="2x" />
    </div>
    <div class="menu-item__title">
      {{ title }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SideBarMenuItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: () => []
    },
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      const { path, $route } = this
      return path === $route.path
    }
  }
}
</script>

<style lang="scss">
.menu-item {
  display: block;
  padding: 10px;
  border: 3px solid transparent;
  border-radius: 10px;
  text-align: center;
  .menu-item__icon {
    margin-bottom: 10px;
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  & * {
    color: #000;
  }
  &:hover {
    &:not(.active) {
      border: 3px solid #9ac113;
      * {
        color: #9ac113;
        fill: #9ac113;
      }
    }
  }
  &.active {
    background: #f7f7f7;
  }
}
</style>
