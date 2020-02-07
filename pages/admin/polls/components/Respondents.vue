<template>
  <div class="respondent">
    <div class="respondent__title">Добавить опрос</div>
    <el-form ref="form" label-width="200px">
      <RespondentForm
        v-for="(_, index) in form"
        v-model="form[index]"
        :key="index"
        :index="index"
        v-on:remove="remove(index)"
      />
    </el-form>
    <el-row class="respondent__add-condition">
      <el-button @click="addCondition">
        <p class="icon">+</p>
        <p>Нажмите чтобы новое условие выборки</p>
      </el-button>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="4">
        <el-button type="success" plain>Протестировать опрос</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="success">Далее</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RespondentForm from './RespondentForm'

export default {
  name: 'Respondents',
  components: {
    RespondentForm
  },
  data() {
    return {
      form: [
        {
          condition: 'age',
          options: [
            {
              from: '',
              to: ''
            }
          ]
        }
      ]
    }
  },
  methods: {
    addCondition() {
      this.form.push({
        condition: 'age',
        options: [
          {
            from: '',
            to: ''
          }
        ]
      })
    },
    remove(index) {
      this.form.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.respondent {
  .respondent__title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .respondent__add-condition {
    padding: 50px 20px 20px;
    text-align: center;
    .icon {
      font-size: 45px;
    }
    button {
      width: 100%;
      color: #3a904c;
      padding: 25px;
    }
  }
}
</style>
