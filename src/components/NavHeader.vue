<template>
    <header class="nav-header">
        <a class="left" v-on:click="clickMenu"><ion-icon name="menu"></ion-icon></a>
        <a class="right" v-on:click="click"><ion-icon v-bind:name="`arrow-${$route.name == 'post' ? 'back': 'forward'}`"></ion-icon></a>
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
        // &:hover {
        //     box-shadow: 0 0 0 3px rgba(125, 139, 153, 0.15);
        // }
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

    ion-icon {
        font-size: 22px;
    }
}
</style>
