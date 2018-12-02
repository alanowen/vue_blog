<template>
    <div class="loading" :style="styles" v-show="show"></div>
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
        }
    },

    computed: {
        styles() {
            return {
                height: this.height

            }
        }
    },

    data() {
        return {

        }
    },

    mounted() {

    },

    created() {

    }
}
</script>


<style lang="stylus" scoped>
.loading {
    width: 100%
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #2d8cf0;    
}
</style>
