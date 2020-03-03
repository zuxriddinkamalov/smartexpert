<template>
  <div class="side-bar">
    <SideBarMenu :items="menu" class="side-bar__menu" />
  </div>
</template>

<script>
import SideBarMenu from '~/components/SideBar/SideBarMenu.vue'
import { menu } from '~/constants/menu'

export default {
  name: 'SideBar',
  components: {
    SideBarMenu
  },
  data() {
    return {
      menu
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(35, 93, 121);
  opacity: 0.4;
  transition: opacity 300ms;
  &:hover {
    opacity: 1;
  }
  &__menu {
    flex-grow: 1;
  }
}
</style>
