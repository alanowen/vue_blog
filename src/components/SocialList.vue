<template>
    <div class="social">
        <a class="social-btn left"><ion-icon name="logo-github"></ion-icon></a>
        <a class="social-btn right"><ion-icon name="mail"></ion-icon></a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/variables.styl'

.social {
    position: absolute;
    bottom: 0px;
    width: 165px;
    border-top: 1px solid $sub-color;

    ion-icon {
        font-size: 20px;
    }

    & a:hover {
        background: #363e4f;
        color: $background-color;
    }

    .social-btn {
        width: 50%;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        &.left {
            float: left;
        }
        &.right {
            float: left;
        }
    }
}
</style>
