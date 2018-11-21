<template>
<div>
    <ul>
        <li v-for="(category, index) in categories" v-bind:key="index" v-bind:class="{ active: activeCategory == category.name }" v-on:click="selectCategory(category)">
            <a href="javascript:void(0)">{{ category.name }}</a>
        </li>
    </ul>
</div>
</template>

<script>

import { mapState } from 'vuex'

export default {

    data() {
        return {
            activeCategory: null
        }
    },

    computed: {
        ...mapState(['categories'])
    },

    methods: {
        selectCategory(category) {
            this.activeCategory = category.name;
            this.$store.dispatch('getPostList', category.id)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/variables.styl'

ul {
    font-size: 14px;
    margin: 0px;
    padding: 0px;
    height: 100%;
    li {
        list-sytle:none;
        padding: 14px 24px;
        cursor: pointer;

        &:hover {
            background: #363e4f;
            a {
                color: $background-color;
            }
        }

        &.active {
            a {
                color: $background-color;
            }
            background: #363e4f;
        }
    }
}
</style>