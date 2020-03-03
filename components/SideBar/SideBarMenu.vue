<template>
  <div class="side-bar-menu">
    <SideBarMenuItem
      v-for="item in items"
      :key="item.name"
      :path="item.path"
      :title="item.title"
      :icon="item.icon"
    />
  </div>
</template>

<script>
import SideBarMenuItem from './SideBarMenuItem.vue'

export default {
  name: 'SideBarMenu',
  components: {
    SideBarMenuItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
