<template>
    <div class="post" v-html="post.body_html" v-highlight>
    </div>
</template>


<script>
import { maptState, mapState } from 'vuex'

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
        this.$store.dispatch('getPost', to.params.id)
        setTimeout(() => {
            next()
        }, 200)
    },

    beforeRouteLeave(to, from, next) {
        next()
    }
}
</script>


<style lang="stylus" scoped>
.post {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 40px;
    box-sizing: border-box;
}
</style>
