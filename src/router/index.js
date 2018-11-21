import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: 'post',
            path: '/post/:id',
            component: resolve => require(['@components/PostContent.vue'], resolve)
        }
    ]
})