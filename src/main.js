import Vue from 'vue'

import App from '@components/App'
import store from './store'
import router from './router'
import Highlight from '@plugins/Highlight'
import Loading from '@plugins/Loading'

Vue.use(Highlight)
Vue.use(Loading)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})