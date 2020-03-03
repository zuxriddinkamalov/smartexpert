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
  padding: 20px;
  text-align: center;
  &__icon {
    margin-bottom: 10px;
  }
  & * {
    color: #fff;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &.active {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
