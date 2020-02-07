import Vue from 'vue'

Vue.directive('full-width', {
  bind(el, binding, vnode) {
    el.style.width = '100%'
  }
})

Vue.directive('text-center', {
  bind(el, binding, vnode) {
    el.style.textAlign = 'center'
  }
})
