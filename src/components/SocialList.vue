<template>
    <div class="social">
        <a class="social-btn left" href="javascript:void(0)" v-on:click="openNewTab(config.social.github)"><i class="icon ion-logo-github"></i></a>
        <a class="social-btn right" :href="'mailto:' + config.social.email"><i class="icon ion-md-mail"></i></a>
        <a class="social-btn left"><i class="icon ion-logo-rss"></i></a>
    </div>
</template>

<script>
import config from '@@config'

export default {
    data() {
        return {
            config: config
        }
    },

    methods: {
        openNewTab(linkAddress) {
            window.open(linkAddress, '_blank')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/variables.styl';

.social {
    position: absolute;
    bottom: 0px;
    width: 165px;
    
    a {
        color: hsla(0,0%,100%,.7);
        i {
            font-size: 20px;
        }
    }

    & a:hover {
        border-radius: 2px;
        background: #363e4f;
        color: $background-color;
    }

    .social-btn {
        width: 50%;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        &.left {
            float: left;
        }
        &.right {
            float: left;
        }
    }
}
</style>
