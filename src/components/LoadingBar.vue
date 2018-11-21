<template>
    <div class="loading-bar" :style="styles"></div>
</template>

<script>
export default {
    props: {
        percent: {
            type: Number,
            default: 0
        }
    },
    computed: {
        styles() {
            return {
                width: `${this.percent}%`,
                height: `2px`
            }
        }
    },

    data() {
        return {}
    },

    methods: {
        start() {
            // setInterval(() => {
            //     //this.percent += 1
            //     console.log('11')
            // }, 500)
        },

        end() {

        }
    }
}
</script>


<style lang="stylus" scoped>
@import '../assets/style/variables.styl'

.loading-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    background-color: #2d8cf0;
}
</style>
