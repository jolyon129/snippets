<template>
    <div class="app-view">
        <div class="header">
            <h1>{{Message}}</h1>
        </div>
        <div class="main">

            <cat-list></cat-list>

            <router-view
                    class="view clearfix"
                    transition="fade"
                    keep-alive
                    transition-mode="out-in">
            </router-view>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    import CatList from './CatListView.vue'


    export default {
        name: 'app',
        components: {
            CatList
        },
        data () {
            return {
                Message: 'This is a collection of my snippets'
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../style/reset.css"
    @import "../style/common.styl"
    @import "../style/markdown.styl"
    /*layout*/
    .main
        margin 5px auto
        width 850px

    .header
        margin 10px

    .cat-list-view
        position absolute
        left 20px
        width 120px
        border solid 1px #ddd

    .post-list-view
        border solid 1px #ddd
        position relative
        & .list-aside
            width 150px
            border solid 1px #ddd
            float left
        & .post-content-view
            border solid 1px #ddd
            margin-left 150px
            width 690px
</style>