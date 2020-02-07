<template>
  <div class="avatar">
    <div
      :style="{ backgroundImage: `url(${url})`, backgroundColor: color }"
      class="avatar__image"
    />
    <div v-if="title || userRole" class="avatar-text">
      <p class="avatar__title">{{ title }}</p>
      <p class="avatar__role">{{ userRole }}</p>
    </div>
  </div>
</template>

<script>
import avatar from '~/assets/avatar.jpg'
export default {
  name: 'Avatar',
  props: {
    url: {
      type: String,
      default: () => avatar
    },
    color: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      default: ''
    },
    userRole: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  .avatar__image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .avatar-text {
    margin-left: 10px;
    .avatar__title {
      font-size: 14px;
      font-weight: bold;
    }
    .avatar__role {
      color: #8c8c8c;
      font-size: 12px;
    }
  }
}
</style>
