<template>
  <div class="group">
    <div
      :style="{ backgroundImage: `url(${image})` }"
      class="group--photo"
    ></div>
    <div class="group__body">
      <h3 class="group__body--title">"{{ title }}"</h3>
      <div class="group__body--content">{{ content }}</div>
      <div v-if="tags" class="group__body--tags">
        <el-tag v-for="tag in tags" :key="tag" effect="plain">
          {{ tag }}
        </el-tag>
      </div>
      <div class="group__body__action">
        <el-row type="flex" align="middle" justify="space-between">
          <el-col :span="6" class="group__body__action__owner">
            <span class="group__body__action__owner--icon"></span>
            <span>{{ owner }}</span>
          </el-col>
          <el-col :span="6" class="group__body__action--members">
            <span><font-awesome-icon :icon="['fas', 'user-friends']"/></span>
            <span>{{ members }}</span>
          </el-col>
          <el-button type="primary" size="medium">Войти</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    owner: {
      type: String,
      default: ''
    },
    members: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  display: flex;
  border: 1px solid #d9d9d9;
  min-height: 200px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &--photo {
    width: 200px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center;
  }
  &__body {
    padding: 20px;
    &--title {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
      color: #4f4f4f;
    }
    &--content {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 10px;
    }
    &--tags {
      border-bottom: 1px solid #d6d6d6;
      padding-bottom: 15px;
      margin-bottom: 15px;
      .el-tag {
        border: 1px solid #235d79;
        color: #828282;
        box-sizing: border-box;
        border-radius: 3px;
        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
    &__action {
      &__owner {
        display: flex;
        align-items: center;
        &--icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #c4c4c4;
          border: 2px solid #245868;
          margin-right: 10px;
          & + span {
            font-size: 14px;
            color: #5c5b5b;
          }
        }
      }
      &--members {
        font-weight: 500;
        font-size: 13px;
        color: #8a8a8a;
      }
    }
  }
}
</style>
