<template>
    <transition name="fade">
        <div v-if="post">
            <div class="post" v-html="post.body_html" v-highlight>
            </div>
        </div>
    </transition>
</template>


<script>
import { maptState, mapState } from 'vuex';

export default {
    data() {
        return {}
    },

    computed: {
        ...mapState(['post'])
    },

    created() {
    },

    mounted() {
    },

    beforeRouteEnter(to, from, next) {
        next()
    },

    beforeRouteUpdate(to, from, next) {
        next()
        this.$store.dispatch('getPost', {postId: to.params.id, vm: this})
    },

    beforeRouteLeave(to, from, next) {
        next()
    }
}
</script>


<style lang="stylus" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.post {
    line-height: 1.5;
}
</style>
