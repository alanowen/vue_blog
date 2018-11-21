<template>
    <div class="container">
        <!-- <loading-bar ref="loadingBar" :percent="40"></loading-bar> -->
        <aside class="side-column">
            <nav id="post-category-list">
                <category-list></category-list>
                <social-list></social-list>
            </nav>
            <nav id="post-list">
                <post-list></post-list>
            </nav>
        </aside>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import 'animate.css/animate.min.css'

import '@assets/style/base.styl'

import CategoryList from './CategoryList.vue'
import PostList from './PostList.vue'
import LoadingBar from './LoadingBar.vue'
import SocialList from './SocialList.vue'

export default {

    components: {
        CategoryList,
        PostList,
        LoadingBar,
        SocialList
    },

    data() {
        return {
        }
    },

    mounted() {
        this.$store.dispatch('getCategoryList')
        // this.$refs.loadingBar.start()
    },

    methods: {

    }
}
</script>
