<template>
    <transition name="fade">
        <ul v-show="posts.length != 0">
            <li v-for="(post, index) in posts" v-bind:class="{ active: activePost == post.title }" v-bind:key="index" v-on:click="selectPost(post)">
                <a class="" href="javascript:void(0)">
                    <span class="post-title">{{ post.title }}</span>
                    <span class="post-date">Fri 2017</span>
                </a>
            </li>
        </ul>
    </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            activePost: null
        }
    },

    computed: {
        ...mapState(['posts'])
    },

    methods: {
        selectPost(post) {
            this.activePost = post.title
            this.$router.push({ name: 'post', params: { id: post.id }})
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/variables.styl';

ul {
    margin: 0px;
    padding: 0px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden; 
    li {
        margin: 4px 12px;
        padding: 10px 8px 10px;
        border-radius: 4px;
        list-style-type:none;
        &:hover {
            background-color: $divider-color;
            cursor: pointer;
        }
        &.active {
            background-color: $divider-color;
            box-shadow: -1px 1px rgba(229, 232, 236, 0.9);     
        }
        .post-title {
        }
        .post-date {
            float: right;
        }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.loading {
    width: 100%
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #ff3366;    
}
</style>

