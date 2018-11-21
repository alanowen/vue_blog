import Vue from 'vue'

import App from '@components/App'
import store from './store'
import router from './router'
import Highlight from '@components/Highlight'

Vue.use(Highlight)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})