export const SET_BREAD_CRUMB = 'SET_BREAD_CRUMB'

export default {
  [SET_BREAD_CRUMB]: (state, val) => {
    state.breadcrumb = val
  }
}
