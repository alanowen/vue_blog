import Vue from 'vue'
import Vuex from 'vuex'

import util from '@libs/util'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [
            {
                name: '全部文章',
                id: 0
            }
        ],

        posts: [],

        post: {
            body_html: null,
            id: null,
            title: null
        }
    },

    mutations: {

    },

    actions: {
        getPostList({ state }, categoryId) {
            let promise = new Promise((resolve, reject) => {
                state.posts = []
                util.ajax.get('/api/post/list?category_id=' + categoryId).then(response => {
                    let data = response.data
                    setTimeout(() => {
                        state.posts = data
                        resolve(data)                        
                    }, 200);

                }).catch(error => {
                    reject(error)
                })
            })
            return promise
        },

        getCategoryList({ state }) {
            let promise = new Promise((resolve, reject) => {
                util.ajax.get('/api/category/list').then(response => {
                    let data = response.data
                    state.categories = [{name: '全部文章', id: 0}, ...data]
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
            return promise
        },

        getPost({ state }, { postId, vm }) {
            vm.$loading.start()
            state.post = null
            let promise = new Promise((resolve, reject) => {
                util.ajax.get('/api/post/' + postId).then(response => {
                    let data = response.data
                    state.post = data
                    resolve(data)
                }).catch(error => {
                    reject(error)
                }).finally(() => {
                    vm.$loading.finish()
                })
            })
            return promise
        }
    },

    getters: {

    }
})