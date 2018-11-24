<template>
    <header class="nav-header">
        <a class="left" v-on:click="clickMenu"><i class="icon ion-md-menu"></i></a>
        <a class="right" v-on:click="click"><i :class="`icon ion-md-arrow-${$route.name == 'post' ? 'back': 'forward'}`"></i></a>
    </header>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },

    mounted() {
    },

    methods: {
        clickMenu() {
        },

        click() {

        }
    }
}
</script>


<style lang="stylus" scoped>
@import '../assets/style/variables.styl';

.nav-header {
    position: relative;
    height: 60px;
    background-color: $background-color;
    border-bottom: 1px solid $border-color;
    a {
        position: relative;
        top: 19px;
        display: inline-block;
        border-radius: 0;

        &.left {
            float: left;
            left: 15px;
        }
        &.right {
            float: right;
            right: 15px;
        }
    }

    @media screen and (max-width: $side-column-width) {
        display: block;
    }

    i {
        font-size: 22px;
    }
}
</style>
