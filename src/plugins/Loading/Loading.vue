<template>
    <transition name="fade">
        <div class="loading" :style="styles" v-show="show"></div>
    </transition>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: '2px'
        },
        show: {
            type: Boolean,
            default: false
        },

        percent: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
        }
    },

    computed: {
        styles() {
            return {
                height: this.height,
                width: `${this.percent}%`
            }
        }
    },

    data() {
        return {
        }
    },

    mounted() {

    },

    methods: {
        
    },

    created() {
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

.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #ff3366;
    transition: width .2s linear;
}
</style>
