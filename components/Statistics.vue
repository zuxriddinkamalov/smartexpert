<template>
  <div class="statistics">
    <div class="statistics__content">
      <font-awesome-icon :icon="['fas', 'trophy']" />
      <span class="down statistics__content--count">96/128</span>
    </div>
    <div class="content">
      <font-awesome-icon :icon="['far', 'star']" />
      <span class="up statistics__content--count">594</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.statistics {
  display: flex;
  & * {
    fill: #235d79;
    color: #235d79;
    font-weight: 300;
    font-size: 24px;
  }
  &__content {
    &:not(:last-child) {
      margin-right: 45px;
    }
    &--count {
      position: relative;
      display: inline-block;
      &.up:after {
        content: '\2191';
        position: absolute;
        right: -20px;
        top: -3px;
        color: #58b58b;
        font-size: 28px;
      }
      &.down:after {
        content: '\2193';
        position: absolute;
        right: -20px;
        top: -3px;
        color: #d85243;
        font-size: 28px;
      }
    }
  }
}
</style>
