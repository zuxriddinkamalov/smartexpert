<template>
  <div class="avatar">
    <div
      :style="{ backgroundImage: `url(${url})`, backgroundColor: color }"
      class="avatar__image"
    />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  &__image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 2px solid #245868;
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
}
</style>
