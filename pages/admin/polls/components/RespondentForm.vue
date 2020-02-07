<template>
  <div class="respondent">
    <el-form
      ref="form"
      :model="value"
      class="respondent__form"
      label-position="left"
      label-width="200px"
    >
      <el-form-item :label="`Условие ${index + 1}`">
        <el-select v-full-width v-model="value.condition">
          <el-option label="Возраст респондента" value="age"></el-option>
          <el-option label="Тип карты лояльности" value="cart_type"></el-option>
          <el-option
            label="Статус карты лояльности"
            value="cart_status"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- eslint-disable-next-line vue/require-component-is -->
      <component
        v-bind:is="optionComponent"
        v-for="(_, i) in value.options"
        v-model="value.options[i]"
        :key="i"
        :index="i"
      />
      <el-form-item>
        <el-row type="flex" justify="space-between">
          <el-button
            v-if="value.condition === 'age'"
            @click="addAge"
            type="success"
            plain
            >Добавить диапазон</el-button
          >
          <el-button
            v-if="value.condition === 'cart_type'"
            @click="addCartType"
            type="success"
            plain
            >Добавить тип</el-button
          >
          <el-button
            v-if="value.condition === 'cart_status'"
            @click="addStatus"
            type="success"
            plain
            >Добавить статус</el-button
          >
          <el-button @click="remove" type="danger" plain
            >Удалить условие</el-button
          >
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import StatusComponent from './StatusComponent'
import AgeComponent from './AgeComponent'
import TypeComponent from './TypeComponent'

export default {
  name: 'RespondentForm',
  /* eslint-disable */
  components: {
    StatusComponent,
    TypeComponent,
    AgeComponent
  },
  /* eslint-enable */
  props: {
    index: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        condition: 'age',
        options: []
      })
    }
  },
  computed: {
    optionComponent() {
      const condition = this.value.condition
      switch (condition) {
        case 'age':
          return 'AgeComponent'
        case 'cart_type':
          return 'TypeComponent'
        case 'cart_status':
          return 'StatusComponent'
        default:
          return 'AgeComponent'
      }
    }
  },
  watch: {
    'value.condition'(condition) {
      this.$emit('input', {
        condition,
        options: []
      })
    }
  },
  methods: {
    addAge() {
      const options = this.value.options
      const condition = this.value.condition
      options.push({
        from: '',
        to: ''
      })
      this.$emit('input', {
        condition,
        options
      })
    },
    addCartType() {
      const options = this.value.options
      const condition = this.value.condition
      options.push('gold')
      this.$emit('input', {
        condition,
        options
      })
    },
    addStatus() {
      const options = this.value.options
      const condition = this.value.condition
      options.push('active')
      this.$emit('input', {
        condition,
        options
      })
    },
    remove() {
      this.$emit('remove')
    }
  }
}
</script>

<style lang="scss">
.respondent {
  padding: 30px 0 30px;
  border-bottom: 1px solid #ddd;
  &:not(:last-child) {
    position: relative;
    &:after {
      content: 'И';
      position: absolute;
      bottom: -16px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 3px;
      padding: 5px 8px;
      background: rgb(232, 232, 232);
      left: 30px;
    }
  }
  .respondent__form {
    .el-form-item__label {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
