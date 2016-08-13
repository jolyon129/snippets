<template>
    <div class="app-view">
        <div class="header">
            <h1>{{Message}}</h1>
        </div>
        <div class="main">

            <cat-list></cat-list>

            <router-view
                    class="view"
                    transition
                    keep-alive
                    transition-mode="out-in">
            </router-view>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    import CatList from './CatList.vue'


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

    .main
        position relative

    .cat-list-view
        position absolute
        left 0
        width 120px
        border solid 1px #ddd

</style>