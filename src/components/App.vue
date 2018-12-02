<template>
    <div class="column-container">
        <nav-header v-if="showHeader"></nav-header>
        <div class="row-container">
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
    </div>
</template>

<script>
import 'animate.css/animate.min.css'
import 'ionicons/dist/css/ionicons.min.css'

import '@assets/style/base.styl'

import CategoryList from './CategoryList.vue'
import PostList from './PostList.vue'
import SocialList from './SocialList.vue'
import NavHeader from './NavHeader.vue'

export default {

    components: {
        CategoryList,
        PostList,
        SocialList,
        NavHeader
    },

    data() {
        return {
            showHeader: false,
        }
    },

    created() {
        window.addEventListener('resize', this.onResize)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },

    mounted() {
        this.$loading.show()
        this.onResize()
        this.$store.dispatch('getCategoryList')
    },

    methods: {
        onResize() {
            if (window.innerWidth < 600) {
                this.showHeader = true
            } else {
                this.showHeader = false
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/variables.styl';

.side-column {
    order: 0;
    height 100%;
    width: $side-column-width;
    flex-shrink: 0;
    border-right: 1px solid $border-color;

    nav {
        height: 100%;
    }

    nav[id=post-category-list] {
        background-color: $content-color;
        width: $post-category-list-width;
        float: left;
    }

    nav[id=post-list] {
        width: $side-column-width - $post-category-list-width;
        background-color: $background-color;
        float: left;
    }

    @media screen and (max-width: $side-column-width) {
        width: 100%;
        border: none;

        nav[id=post-category-list] {
            display: none;
        }
        nav[id=post-list] {
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            clear: left;
        }
    }
}

.main-content {
    @media screen and (max-width: 600px) { 
        display: none;
    }
    width: 100%;
    padding: 20px 40px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: $background-color;
    order: 1;
}
</style>
