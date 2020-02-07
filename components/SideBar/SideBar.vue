<template>
  <div class="side-bar">
    <div class="side-bar__avatar">
      <Avatar url="" color="#E62101" />
    </div>
    <SideBarMenu :items="menu" class="side-bar__menu" />
    <nuxt-link to="/" class="side-bar__bottom-item"></nuxt-link>
  </div>
</template>

<script>
import SideBarMenu from '~/components/SideBar/SideBarMenu.vue'
import Avatar from '~/components/Avatar.vue'
import { menu } from '~/constants/menu'

export default {
  name: 'SideBar',
  components: {
    SideBarMenu,
    Avatar
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
  .side-bar__avatar {
    margin: 20px 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .side-bar__menu {
    flex-grow: 1;
  }
  .side-bar__bottom-item {
    width: 40px;
    height: 40px;
    text-align: center;
    position: relative;
    border-radius: 50%;
    border: 2px solid;
    margin: 20px auto;
    &:after {
      content: '?';
      position: absolute;
      line-height: normal;
      top: 0;
      left: 0;
      right: 0;
      font-size: 25px;
      color: #07a327;
    }
  }
}
</style>
