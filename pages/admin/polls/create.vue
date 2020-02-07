<template>
  <el-card class="box-card">
    <div v-if="tab === 'condition'">
      condition
    </div>
    <div v-if="tab === 'logic'">
      logic
    </div>
    <div v-if="tab === 'question'">
      question
    </div>
    <div v-if="tab === 'parameter'">
      parameter
    </div>
    <div v-if="tab === 'respondents'">
      <Respondents v-model="form.respondents" />
    </div>
  </el-card>
</template>

<script>
import Respondents from './components/Respondents'
export default {
  name: 'CreatePoll',
  layout: 'admin',
  meta: {
    breadcrumb: 'Добавить опрос'
  },
  components: {
    Respondents
  },
  data() {
    return {
      form: {
        respondents: {}
      }
    }
  },
  computed: {
    tab() {
      return this.$route.query.tab || 'respondents'
    }
  }
}
</script>

<style scoped>
.box-card {
  border-top: 1px solid #ceed60;
}
</style>
