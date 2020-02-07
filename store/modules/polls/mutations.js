export const SET_POLL_FORM = 'SET_POLL_FORM'

export default {
  [SET_POLL_FORM]: (state, val) => {
    state.form = Object.assign(state.form, val)
  }
}
