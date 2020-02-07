import axios from 'axios'

export default {
  savePoll(_, form) {
    return axios.post('api/v1/polls/', { ...form })
  }
}
