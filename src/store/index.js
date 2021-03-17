import { createStore } from 'vuex'

import task from './modules/task'
import about from './modules/about'

export default createStore({
  modules: {
    task,
    about
  },
})