import polls from './modules/polls'
import general from './modules/general'
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () =>
  new Vuex.Store({
    ...general,
    modules: {
      polls
    },
    /**
     * If strict mode should be enabled.
     */
    strict: debug,
    devtools: debug,

    /**
     * Plugins used in the store.
     */
    plugins: debug ? [createLogger()] : []
  })

export default store
